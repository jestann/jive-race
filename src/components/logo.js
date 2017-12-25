import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Greeting from './greeting'
import './../styles/navbar.css'

import logo from './../assets/running-team.png'

class Logo extends Component {
  render () {
    return (
      <div className="logo">
        <img src={logo} className="logo-image" alt="logo" />
        <div className="logo-text">
          <Link className="logo-title" to="/">Jive Race</Link>
          <Greeting {...this.props} />
        </div>
      </div>
    )
  }
}

export default Logo