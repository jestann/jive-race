import React, { Component } from 'react'
import './styles/app.css'

import Navbar from './components/navbar'
import Main from './components/main'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { currentTab: "Home" }
    this.state.changeTab = (tab) => {
      this.setState({ currentTab: tab })
    }
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