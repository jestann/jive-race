import React from 'react'
import ReactDOM from 'react-dom' // includes { render } from 'react-dom'
import registerServiceWorker from './tools/registerServiceWorker'

import './styles/index.css'
import App from './app'
import MainRouter from './router'

ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<MainRouter />, document.getElementById('root'))

registerServiceWorker()