import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Logo from './logo'
import Greeting from './greeting'
import Navlink from './navlink'

import toggler from './../../assets/icons/nav-toggler.png'
import './../../css/navbar.css'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = { navMobileMenuCSS: "navbar-list mobile-list hidden" }
    this.toggleNav = this.toggleNav.bind(this)
  }
  
  // toggle navigation menu on mobile
  toggleNav () {
    if (this.state.navMobileMenuCSS === "navbar-list mobile-list hidden") {
      this.setState({ navMobileMenuCSS: "navbar-list mobile-list"})
    } else {
      this.setState({ navMobileMenuCSS: "navbar-list mobile-list hidden"})
    }
  }

  // navigation bar with logo, greeting (authentication options), and navigation links (as both mobile menu and wide-screen spread)
  // "navbar-spread" presents the wide-screen navigation spread
  // "{this.state.navMobileMenuCSS}" toggles the mobile navigation menu
  render () {
    return (
      <div role="navigation">
        <div className="navbar-custom">
          <Logo />
          <Greeting {...this.props} toggleGreeting={this.toggleGreeting} greetingCSS={this.state.greetingCSS} />
          <div className="navbar-toggler" onClick={this.toggleNav}>
            <img className="nb-toggler-img" alt="Toggle Navigation" src={toggler} />
          </div>
          <div className="navbar-spread">
            <Navlink to="/contact" label="Contact" />
            <Navlink to="/currentteams" label="Teams" />
            <Navlink to="/currentrace" label="Race 2018" />
            <Navlink to="/register" label="Join" />
            <Navlink to="/" label="Home" />
          </div>
        </div>
        <div className={this.state.navMobileMenuCSS}>
          <div className="nav-separator"></div>
          <div className="nb-mobile-list-item"><Navlink to="/" label="Home" /></div>
          <div className="nb-mobile-list-item"><Navlink to="/register" label="Join" /></div>
          <div className="nb-mobile-list-item"><Navlink to="/currentrace" label="Race 2018" /></div>
          <div className="nb-mobile-list-item"><Navlink to="/currentteams" label="Teams" /></div>
          <div className="nb-mobile-list-item"><Navlink to="/contact" label="Contact" /></div>
        </div>
      </div>
    )
  }
}

Navbar.propTypes = {
  // this component only passes props through from App to Greeting, as listed below
  loggedIn: PropTypes.bool, // is required
  user: PropTypes.object, // is required, but can also be null, so not listed as isRequired
  logout: PropTypes.func // is required
}

export default Navbar

// <Link to={`/user/${user.id}`}>{user.name}</Link>
// <Link to="/inbox">Inbox</Link>