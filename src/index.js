import React from 'react'
import ReactDOM from 'react-dom' // includes { render } from 'react-dom'
import './styles/index.css'
import App from './app'
import registerServiceWorker from './tools/registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
