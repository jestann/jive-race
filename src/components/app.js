import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './../styles/main.css'

import Navbar from './navbar'
import Main from './main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Main />
        </div>
      </BrowserRouter>
    )
  }
}

export default App