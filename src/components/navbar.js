import React, { Component } from 'react'
import './../styles/navbar.css'

import Logo from './logo'
import Navlink from './navlink'

class Navbar extends Component {
  render () {
    return (
      <div className="navbar">
        <Logo />
        <Navlink to="/contact" label="Contact" />
        <Navlink to="/teams" label="Teams" />
        <Navlink to="/register" label="Register" />
        <Navlink to="/race" label="Race 2018" />
        <Navlink to="/" label="Home" />
      </div>
    )
  }
}

export default Navbar

// <Link to={`/user/${user.id}`}>{user.name}</Link>
// <Link to="/inbox">Inbox</Link>