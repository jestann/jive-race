import React, { Component } from 'react'
import './../styles/main.css'

class Title extends Component {
  render (props) {
    return (
      <div className="title">
        {this.props.title}
      </div>
    )
  }
}

export default Title