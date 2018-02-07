import React from 'react'
import ReactDOM from 'react-dom' // includes { render } from 'react-dom'
import { createStore } from 'redux'
import registerServiceWorker from './tools/registerServiceWorker'

import App from './components/app'
import reducer from './store/reducers/reducer'
import 'bootstrap/dist/css/bootstrap.css';
import './css/main/main.css'

let store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <App store={store} />, 
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
registerServiceWorker()

// can add additional components in div with same store, like <Results store={store}/>
