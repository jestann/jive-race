import React, { Component } from 'react'
import './styles/app.css'

import Navbar from './components/navbar'
import Main from './components/main'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Main />
      </div>
    )
  }
}

export default App