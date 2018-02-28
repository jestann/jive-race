import React from 'react'
import ReactDOM from 'react-dom' // includes { render } from 'react-dom'
import registerServiceWorker from './tools/registerServiceWorker'

import App from './components/app'
import 'bootstrap/dist/css/bootstrap.css';
import './css/main/main.css'


const render = () => {
  ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )
}
registerServiceWorker()
