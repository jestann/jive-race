import React, { Component } from 'react'
import Logo from './logo'
import Greeting from './greeting'
import Navlink from './navlink'
/* import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'; */
import './../css/header.css'

// make this collapse for mobile

class Header extends Component {
  render () {
    return (
      <div className="navbar-main">
        <Logo {...this.props} />
        <Greeting {...this.props} />
        <Navlink to="/contact" label="Contact" />
        <Navlink to="/currentteams" label="Teams" />
        <Navlink to="/register" label="Register" />
        <Navlink to="/currentrace" label="Race 2018" />
        <Navlink to="/" label="Home" />
      </div>
    )
  }
}

export default Header

// <Link to={`/user/${user.id}`}>{user.name}</Link>
// <Link to="/inbox">Inbox</Link>