import React, { Component } from 'react'
import Button from './../components/button'
import './../styles/navbar.css'

class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false, username: "" }
  }
  
  signup () {
    this.setState({ isLoggedIn: true, username: "New Person" })
  }
  
  login () {
    this.setState({ isLoggedIn: true, username: this.props.username })
  }
  
  logout () {
    this.setState({ isLoggedIn: false, username: "" })
  }
  
  render () {
    let signupImg = { alt: "arrow", src: "https://png.icons8.com/signature/ultraviolet/24" }
    let loginImg = { alt: "lock", src: "https://png.icons8.com/lock/color/24" }
    let logoutImg = { alt: "unlock", src: "https://png.icons8.com/unlock/color/24" }
    
    if (this.state.isLoggedIn) {
      return (
        <div className="greeting">
          <span className="greeting-text">Welcome, {this.state.username}.</span>
          <Button label="Log Out" src={logoutImg.src} alt={logoutImg.alt} cssName="logout" onClick={() => this.logout()} />
        </div>
      )
    } else {
      return (
        <div className="greeting">
          <span className="greeting-text">Welcome, Guest.</span>
          <Button label="Log In" src={loginImg.src} alt={loginImg.alt} cssName="login" onClick={() => this.login()} />
          <Button label="Sign Up" src={signupImg.src} alt={signupImg.alt} cssName="signup" onClick={() => this.signup()} />
        </div>
      )
    }
  }
}

export default Greeting