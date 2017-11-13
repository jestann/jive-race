import React, { Component } from 'react'
import Button from './../components/button'
import './../styles/navbar.css'

class Greeting extends Component {
  render () {
    let signupImg = { alt: "arrow", src: "https://png.icons8.com/signature/ultraviolet/24" }
    let loginImg = { alt: "lock", src: "https://png.icons8.com/lock/color/24" }
    let logoutImg = { alt: "unlock", src: "https://png.icons8.com/unlock/color/24" }
    
    if (this.props.loggedIn && this.props.user) {
      return (
        <div className="greeting">
          <span className="greeting-text">Welcome, {this.props.user.username}.</span>
          <Button label="Log Out" src={logoutImg.src} alt={logoutImg.alt} cssLabel="logout hover-bold" onClick={this.props.logout} />
        </div>
      )
    } else {
      return (
        <div className="greeting">
          <span className="greeting-text">Welcome, Guest.</span>
          <Button label="Log In" src={loginImg.src} alt={loginImg.alt} cssLabel="login hover-bold" link="/login" onClick={() => 'empty'} />
          <Button label="Sign Up" src={signupImg.src} alt={signupImg.alt} cssLabel="signup hover-bold" link="/signup" onClick={() => 'empty'} />
        </div>
      )
    }
  }
}

export default Greeting