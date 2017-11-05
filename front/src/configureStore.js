import { createStore } from 'redux'

import AppReducer from './App/reducer'

export const configureStore = preloadedState => {
  const store = createStore(
    AppReducer,
    preloadedState
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
