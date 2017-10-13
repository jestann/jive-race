import React, { Component } from 'react'
import './../styles/main.css'

class ErrorBox extends Component {
  render () {
    let propsError = { success: false, code: 400, body: 'this is an error.' }
    let error = propsError.body
    return (
      <div className='error-box'>
        <div className='error-message'>{error}</div>
      </div>
    )
  }
}

export default ErrorBox