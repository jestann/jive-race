import React, { Component } from 'react'
import './../styles/main.css'

class Test extends Component {
  constructor (props) {
    super(props)
    this.state = { greeting: 'Hello' }
  }
  
  changeGreeting () {
    this.setState({ greeting: 'Hi' })
  }
  
  render () {
    return (
      <div className="Test">
        <h1>{this.props.title}</h1>
        <p>{this.state.greeting} world!</p>
        <button className="button" onClick={() => this.changeGreeting()}>Change the greeting!</button>
      </div>
    )
  }
}

export default Test
