import React, { Component } from 'react'
import './../styles/error.css'

class ErrorBox extends Component {
  render (props) {
    let errorBoxVisible = this.props.isVisible ? "error-box" : "error-box hidden"
    return (
      <div className={errorBoxVisible}>
        <div className='error-message'>{this.props.error.body}</div>
        <div className='error-close-button' onClick={this.props.handleError}>x</div>
      </div>
    )
  }
}

export default ErrorBox