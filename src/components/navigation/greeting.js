import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Glink from './glink' /* need to use this? */
import caret from './../../assets/icons/caret.png'
import './../../css/navigation/greeting.css'

/* Refactor Greeting to better use routing to toggle mobile options */
class Greeting extends Component {
  constructor (props) {
    super(props)
    this.toggleGreeting = this.toggleGreeting.bind(this)
    this.state = { mobileMenuCSS: "greeting-list mobile-list hidden" }
  }
  
  // toggle mobile menu for authentication options
  toggleGreeting () {
    if (this.state.mobileMenuCSS === "greeting-list mobile-list hidden") {
      this.setState({ mobileMenuCSS: "greeting-list mobile-list"})
    } else {
      this.setState({ mobileMenuCSS: "greeting-list mobile-list hidden"})
    }
  }

  // User greeting with authentication options (as both mobile menu and wide-screen spread)
  // "greeting-collapse" presents the wide-screen greeting and authentication options
  // "greeting-dropdown" presents the mobile dropdown menu toggler
  // "{this.state.mobileMenuCSS}" presents the mobile dropdown menu
  render () {
    let signupImg = 'https://png.icons8.com/signature/ultraviolet/24'
    let loginImg = 'https://png.icons8.com/lock/color/24'
    let logoutImg = 'https://png.icons8.com/unlock/color/24'
    if (this.props.loggedIn && this.props.user) {
      return (
        <div className="greeting">
          <div className="greeting-dropdown"> 
            <div className="greeting-toggler" onClick={this.toggleGreeting}>
              <img className="greeting-toggler-img" src={caret} alt="User Options" />
            </div>
          </div>
          <div className="greeting-collapse">
            <div className="greeting-text">Welcome, {this.props.user.username}.</div>
            <Glink label="Log Out" src={logoutImg} alt="" cssLabel="logout" onClick={this.props.logout} />
          </div>
          <div className={this.state.mobileMenuCSS}>
            <div className="greeting-list-header">Welcome, {this.props.user.username}.</div>
            <div className="greeting-list-divider"></div>
            <div className="greeting-list-item" onClick={this.props.logout}>
              <img className="greeting-list-img" src={logoutImg} alt="" />
              Log Out
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="greeting">
          <div className="greeting-dropdown"> 
            <div className="greeting-toggler" onClick={this.toggleGreeting}>
              <img className="greeting-toggler-img" src={caret} alt="User Options" />
            </div>
          </div>
          <div className="greeting-collapse">
            <div className="greeting-text">Welcome, Guest.</div>
            <Glink label="Log In" src={loginImg} alt="" cssLabel="login" link="/login" />
            <Glink label="Sign Up" src={signupImg} alt="" cssLabel="signup" link="/signup" />
          </div>
          <div className={this.state.mobileMenuCSS}>
            <div className="greeting-list-header">Welcome, Guest.</div>
            <div className="greeting-list-divider"></div>
            <div className="greeting-list-item">
              <a href="/signup"><img className="greeting-list-img" src={signupImg} alt="" />Sign Up</a>
            </div>
            <div className="greeting-list-item">
              <a href="/login"><img className="greeting-list-img" src={loginImg} alt="" />Log In</a>
            </div>
          </div>
        </div>
      )
    }
  }
}

Greeting.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  user: PropTypes.object, // is required, but can also be null, so not listed as isRequired
  logout: PropTypes.func.isRequired
}

export default Greeting