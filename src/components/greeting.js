import React, { Component } from 'react'
import Alink from './../components/alink'
import { NavItem } from 'reactstrap'
import './../css/greeting.css'

class Greeting extends Component {
  render () {
    let signupImg = { alt: "arrow", src: "https://png.icons8.com/signature/ultraviolet/24" }
    let loginImg = { alt: "lock", src: "https://png.icons8.com/lock/color/24" }
    let logoutImg = { alt: "unlock", src: "https://png.icons8.com/unlock/color/24" }
    
    if (this.props.loggedIn && this.props.user) {
      return (
        <div className="greeting">
            <span className="greeting-text">Welcome, {this.props.user.username}.</span>
            <Alink label="Log Out" src={logoutImg.src} alt={logoutImg.alt} cssLabel="logout" onClick={this.props.logout} />
        </div>
      )
    } else {
      return (
        <div className="greeting">
          <span className="greeting-text">Welcome, Guest.</span>
          <Alink label="Log In" src={loginImg.src} alt={loginImg.alt} cssLabel="login" link="/login" />
          <Alink label="Sign Up" src={signupImg.src} alt={signupImg.alt} cssLabel="signup" link="/signup" />
        </div>
      )
    }
  }
}

export default Greeting