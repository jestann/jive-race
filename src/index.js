import React from 'react'
import ReactDOM from 'react-dom' // includes { render } from 'react-dom'
import registerServiceWorker from './tools/registerServiceWorker'

import './styles/main.css'
import App from './components/app'

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()