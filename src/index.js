import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import store from './store'

import './style'

let root
function init () {
  const App = require('./components/app').default
  root = render((
    <div id='outer'>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  ), document.body, root)
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

if (module.hot) {
  require('preact/devtools')
  module.hot.accept('./components/app', () => requestAnimationFrame(init))
}

init()
