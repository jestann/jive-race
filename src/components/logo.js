import React, { Component } from 'react'
import Greeting from './greeting'
import './../styles/navbar.css'

import logo from './../assets/logo.svg'

class Logo extends Component {
  render () {
    return (
      <div className="logo">
        <img src={logo} className="logo-image" alt="logo" />
        <div className="logo-text">
          <span className="logo-title">The Race</span>
          <Greeting />
        </div>
      </div>
    )
  }
}

export default Logo