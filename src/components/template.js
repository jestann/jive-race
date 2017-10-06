import React, { Component } from 'react'
import './../styles/main.css'

class Template extends Component {
  constructor (props) {
      super(props)
  }
  
  render () {
    return (
      <div className='container'>
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default Template