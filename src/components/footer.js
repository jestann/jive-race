import React, { Component } from 'react'
import './../styles/main.css'

// make this collapse for mobile

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <div className="footer-text">Copyright 2017 Jive Race</div>
        <div className="social-icons"></div>
      </div>
    )
  }
}

export default Footer