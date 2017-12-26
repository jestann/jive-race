import React, { Component } from 'react'
import './../css/container.css'

class Title extends Component {
  render (props) {
    let cssLabel = this.props.img ? "title-img" : "title"
    
    return (
      <div className={cssLabel}>
        {this.props.title}
      </div>
    )
  }
}

export default Title