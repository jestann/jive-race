import React, { Component } from 'react'
import './../styles/navbar.css'

import logo from './../assets/logo.svg'

class Logo extends Component {
  render () {
    return (
      <div className="logo">
        <img src={logo} className="logo-image" alt="logo" />
        <div className="logo-text">Race App</div>
      </div>
    )
  }
}

export default Logo