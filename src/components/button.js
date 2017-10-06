import React, { Component } from 'react'
import './../styles/main.css'

class Button extends Component {
  render () {
    let cssName = 'button ' + this.props.cssName
    let img = this.props.src ? <img src={this.props.src} alt={this.props.alt} width="18" height="18" /> : ""
    
    return (
      <div className={cssName} onClick={this.props.onClick}>
        <div className="image">{img}</div>
        <div className="label" content={this.props.label}>{this.props.label}</div>
      </div>
    )
  }
}

export default Button