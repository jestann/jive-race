import React, { Component } from 'react'
import './../styles/main.css'

class Button extends Component {
  render () {
    let cssLabel = this.props.cssLabel ? 'button ' + this.props.cssLabel : 'button'
    let img = this.props.src ? <img src={this.props.src} alt={this.props.alt} width="18" height="18" /> : ""
    
    return (
      <div className={cssLabel} onClick={this.props.onClick}>
        <div className="button-image">{img}</div>
        <div className="button-label" content={this.props.label}>{this.props.label}</div>
      </div>
    )
  }
}

export default Button