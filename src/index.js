import React from 'react'
import ReactDOM from 'react-dom' // includes { render } from 'react-dom'
import registerServiceWorker from './tools/registerServiceWorker'

import './styles/index.css'
import App from './app'

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()