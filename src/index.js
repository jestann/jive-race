import React from 'react'
import ReactDOM from 'react-dom' // includes { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './tools/registerServiceWorker'

import './css/main/main.css'
import App from './components/app'

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()

/*
// scaffolding for redux

import { createStore } from 'redux'

// redux
import reducer from './store/reducers'
let store = createStore(reducer)

// styles
// import 'bootstrap/dist/css/bootstrap.css';
// import registerServiceWorker from './tools/registerServiceWorker'

// react
import 'main.css'
import App from './components/app'

function render () {
  ReactDOM.render(
    <div className="index">
      <App store={store}/> 
    </div>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
// registerServiceWorker()

// can add additional components in div with same store, like <Results store={store}/>
*/