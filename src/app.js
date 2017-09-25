import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import './styles/app.css'

import Navbar from './components/navbar'
import Main from './components/main'

class App extends Component {
  constructor () {
    super()
    this.state = { currentTab: "Home" }
    this.setState({ changeTab: (tab) => {
      this.setState({ currentTab: tab })
    }})
  }

  render() {
    return (
      <div className="app">
        <Navbar changeTab={this.state.changeTab} currentTab={this.state.currentTab} />
        <Main currentTab={this.state.currentTab} />
      </div>
    )
  }
}

export default App