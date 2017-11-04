import React, { Component } from 'react'
import './../styles/error.css'

class ErrorBox extends Component {
  render (props) {
    let errorBoxVisible = this.props.errorVisible ? "error-box" : "error-box hidden"
    let error = this.props.error ? this.props.error : ""
    return (
      <div className={errorBoxVisible}>
        <div className='error-message'>{error}</div>
        <div className='error-close-button' onClick={this.props.handleError}>x</div>
      </div>
    )
  }
}

export default ErrorBox