import React, { Component } from 'react'
import './../styles/main.css'
import MainRouter from './../router'

class Main extends Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div className="main">
        <h1>Main Content</h1>
        <p>Current tab: {this.props.currentTab}</p>
        { this.props.children }
      </div>
    )
  }
}

export default Main