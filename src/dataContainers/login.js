import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Fetcher from './../tools/fetcher'
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
    return <LoginView login={this.login} />
  }
}

Login.propTypes = {
  fetcher: PropTypes.instanceOf(Fetcher).isRequired,
  sendMessage: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
}

export default Login