import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Greeting from './greeting'
import './../styles/navbar.css'

import logo from './../assets/logo.svg'

class Logo extends Component {
  render (props) {
    return (
      <div className="logo">
        <img src={logo} className="logo-image" alt="logo" />
        <div className="logo-text">
          <Link className="logo-title" to="/">The Race</Link>
          <Greeting {...props} />
        </div>
      </div>
    )
  }
}

export default Logo