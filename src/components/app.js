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
      loggedIn: false, // fetcher.loggedIn,
      token: "test token", // fetcher.token, 
      user: null, // fetcher.user, 
      error: { success: false, code: 500, error: "This is a test error." }, // fetcher.error,
      errorVisible: true // fetcher.errorVisible
    }
  }
  
  async componentWillMount() {
    let data = await this.state.fetcher.getAuth('result', 'validAttributes')
    // let data = await this.state.fetcher.userIndex(null)
    let auth = 'success: ' + data.success + ' | code: ' + data.code + ' | error: ' + data.error
    this.setState({ error: { error: auth } })
  }
  
  signup () {
    this.setState({ loggedIn: true, user: { name: "New Person" } })
  }
  
  login () {
    this.setState({ loggedIn: true, user: { name: "Jess" } })
  }
  
  logout () {
    this.setState({ loggedIn: false, user: null })
  }
  
  handleError () {
    this.setState({ errorVisible: false })
  }

  render() {
    let error = this.state.error ? this.state.error.error : null // consider using an empty string here
    
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar 
            loggedIn={this.state.loggedIn} 
            token={this.state.token} 
            user={this.state.user} 
            signup={() => this.signup()}
            login={() => this.login()}
            logout={() => this.logout()} />
          <Main 
            loggedIn={this.state.loggedIn} 
            token={this.state.token} 
            user={this.state.user} 
            error={error} 
            errorVisible={this.state.errorVisible}
            handleError={() => this.handleError()} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App