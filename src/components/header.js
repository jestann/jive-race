import React, { Component } from 'react'
import Logo from './logo'
import Greeting from './greeting'
import Navlink from './navlink'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
import './../css/header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render () {
    return (
      <Navbar className="header" expand="md">
        <NavbarBrand href="/"><Logo {...this.props} /></NavbarBrand>
        <Greeting {...this.props} />
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" pills>
            <NavItem>
              <Navlink to="/" label="Home" />
            </NavItem>
            <NavItem>
              <Navlink to="/register" label="Register" />
            </NavItem>
            <NavItem>
              <Navlink to="/currentrace" label="Race 2018" />
            </NavItem>
            <NavItem>
              <Navlink to="/currentteams" label="Teams" />
            </NavItem>
            <NavItem>
              <Navlink to="/contact" label="Contact" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Header

// <Link to={`/user/${user.id}`}>{user.name}</Link>
// <Link to="/inbox">Inbox</Link>