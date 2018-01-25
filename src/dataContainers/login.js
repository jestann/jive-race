import React, { Component } from 'react'
import LoginView from './../views/navigation/loginView'

class Login extends Component {
  constructor (props) { 
    super(props)
    this.login = this.login.bind(this)
  }
  
  async login (labelsArray, valuesArray) {
    if (labelsArray && valuesArray) {
      let submission = {}
      labelsArray.forEach((label, i) => { submission[label] = valuesArray[i] })
      let data = await this.props.fetcher.login(submission.username, submission.password)
      if (!data.success) { this.props.sendMessage(data.message, !data.success) }
      else if (data.success) { 
        this.props.sendMessage('Logged in successfully as ' + data.currentUser.username + '.')
        this.props.login(data.currentUser, data.token)
      }
    }
  }
  
  render () {
    return <LoginView {...this.props} login={this.login} />
  }
}

export default Login