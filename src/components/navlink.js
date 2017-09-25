import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './../styles/navbar.css'

class Navlink extends Component {
  render () {
    return (
      <div className='navlink'>
        <Link {...this.props} activeClassName='active'>
          {this.props.label}
        </Link>
      </div>
    )
  }
}

export default Navlink

// <Link {...this.props} activeClassName="active"/>