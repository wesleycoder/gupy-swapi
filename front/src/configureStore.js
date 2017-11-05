import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import graphqlMiddleware from 'redux-graphql-middleware'
import AppReducer from './App/reducer'

const composeEnhancers =
  typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const middlewares = [
  thunk,
  graphqlMiddleware({
    fetch,
    server: 'http://localhost:3001/graphql',
    action: 'GRAPH',
    ready: 'GRAPH_READY',
    done: 'GRAPH_DONE',
    error: 'GRAPH_ERROR',
    transform: data => data,
    errorTransform: error => error
  })
]

export const configureStore = preloadedState => {
  const store = createStore(
    AppReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept('./App/reducer', () => {
      store.replaceReducer(AppReducer)
    })
  }

  return store
}

export default configureStore
