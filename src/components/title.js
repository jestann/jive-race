import React, { Component } from 'react'
import './../css/title.css'

class Title extends Component {
  render (props) {
    return (
      <div className="title">{this.props.title}</div>
    )
  }
}

export default Title