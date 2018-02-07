import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Fetcher from './../tools/fetcher'
import SignupView from './../views/navigation/signupView'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.signup = this.signup.bind(this)
  }

  async signup (labelsArray, valuesArray) {
    if (labelsArray && valuesArray) {
      let submission = {}
      labelsArray.forEach((label, i) => { submission[label] = valuesArray[i] })
      console.log(submission)
      let data = await this.props.fetcher.authRegister(submission.email, submission.username, submission.password)
      console.log(data)
      if (!data.success) { this.props.sendMessage(data.message, !data.success) }
      else if (data.success) { 
        this.props.sendMessage('Logged in successfully as ' + data.currentUser.username + '.')
        this.props.signup(data.currentUser, data.token)
      }
    }
  }
  
  render () {
    return <SignupView {...this.props} signup={this.signup} />
  }
}

Signup.propTypes = {
  fetcher: PropTypes.instanceOf(Fetcher).isRequired,
  sendMessage: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired
}

export default Signup