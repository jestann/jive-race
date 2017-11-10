import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './../styles/main.css'

import Fetcher from './../tools/fetcher'
import Navbar from './navbar'
import Main from './main'

class App extends Component {
  constructor (props) {
    super(props)
    let fetcher = new Fetcher()
    this.state = { 
      fetcher: fetcher,
      loggedIn: fetcher.loggedIn,
      token: fetcher.token,
      user: fetcher.user,
      dat: fetcher.data,
      isError: fetcher.isError,
      message: fetcher.message,
      messageVisible: fetcher.messageVisible
    }
    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
  }

  signup (user=this.state.fetcher.user) {
    this.setState({ loggedIn: true, user: user })
    let usernameText = user ? ' as ' + user.username + '.' : '.'
    this.sendMessage('Logged in successfully' + usernameText)
  }
  
  login (user=this.state.fetcher.user) {
    this.setState({ loggedIn: true, user: user })
    let usernameText = user ? ' as ' + user.name + '.' : '.'
    this.sendMessage('Logged in successfully' + usernameText)
  }
  
  logout () {
    this.setState({ loggedIn: false, user: null })
    this.sendMessage('Logged out successfully.')
  }
  
  sendMessage (message, isError=false) {
    this.setState({ message: message, messageVisible: true, isError: isError})
  }
  
  handleMessage () {
    this.setState({ messageVisible: false })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar 
            fetcher={this.state.fetcher}
            loggedIn={this.state.loggedIn} 
            token={this.state.token} 
            user={this.state.user} 
            signup={this.signup}
            login={this.login}
            logout={this.logout} 
          />
          <Main 
            fetcher={this.state.fetcher}
            loggedIn={this.state.loggedIn} 
            token={this.state.token} 
            user={this.state.user} 
            data={this.state.data}
            message={this.state.message} 
            messageVisible={this.state.messageVisible}
            isError={this.state.isError}
            handleMessage={this.handleMessage}
            sendMessage={this.sendMessage}
            signup={this.signup}
            login={this.login}
            logout={this.logout}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App