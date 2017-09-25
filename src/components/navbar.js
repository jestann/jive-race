import React, { Component } from 'react'
import './../styles/navbar.css'

import Logo from './logo'
import Navlink from './navlink'

class Navbar extends Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div className="navbar">
        <Logo />
        <Navlink link="" label="Contact" changeTab={this.props.changeTab} currentTab={this.props.currentTab} />
        <Navlink link="" label="Teams" changeTab={this.props.changeTab} currentTab={this.props.currentTab} />
        <Navlink link="" label="Register" changeTab={this.props.changeTab} currentTab={this.props.currentTab} />
        <Navlink link="" label="Race 2018" changeTab={this.props.changeTab} currentTab={this.props.currentTab} />
        <Navlink link="" label="Home" changeTab={this.props.changeTab} currentTab={this.props.currentTab} />
      </div>
    )
  }
}

export default Navbar

// <Link to={`/user/${user.id}`}>{user.name}</Link>
// <Link to="/inbox">Inbox</Link>