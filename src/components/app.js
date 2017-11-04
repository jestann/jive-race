import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './../styles/main.css'

import Fetcher from './../tools/fetcher'
import Navbar from './navbar'
import Main from './main'

class App extends Component {
  constructor (props) {
    super(props)
    let fetcher = new Fetcher()
    this.state = { 
      token: fetcher.token, 
      user: fetcher.user, 
      error: fetcher.error,
      errorVisible: fetcher.errorVisible
    }
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar token={this.state.token} user={this.state.user} />
          <Main token={this.state.token} user={this.state.user} error={this.state.error} errorVisible ={this.state.errorVisible} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App