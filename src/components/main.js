import React, { Component } from 'react'
import './../styles/main.css'
import Test from './test'

class Main extends Component {
  constructor (props) {
      super(props)
  }
  
  render () {
    return (
      <div className="main">
        <h1>Main Content</h1>
        <p>Current tab: {this.props.currentTab}</p>
      </div>
    )
  }
}

export default Main