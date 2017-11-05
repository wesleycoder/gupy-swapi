import { h, render } from 'preact'
import './index.css'
import App from './App/App'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import configureStore from './configureStore'

const store = configureStore({})

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
, document.getElementById('root'))


registerServiceWorker()
