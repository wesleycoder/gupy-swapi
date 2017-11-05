import { h, render } from 'preact'
import './index.css'
import App from './App/App'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import configureStore from './configureStore'

const store = configureStore({})

render(
  <Router>
    <App store={store} />
  </Router>
, document.getElementById('root'))


registerServiceWorker()
