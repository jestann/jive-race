import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './styles/app.css'

import Navbar from './components/navbar'
import Main from './components/main'

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