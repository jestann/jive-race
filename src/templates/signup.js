import React, { Component } from 'react'
import Container from './../components/container'
import Form from './../components/form'
import './../styles/main.css'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.signup = this.signup.bind(this)
  }

  async signup (labelsArray, valuesArray) {
    let submission = {}
    labelsArray.forEach((label, i) => { submission[label] = valuesArray[i] })
    let data = await this.props.fetcher.authRegister(submission.email, submission.username, submission.password)
    if (data.message) { this.props.sendMessage(data.message, !data.success) }
  }
  
  render () {
    let content = <Form 
      heading="Sign up to join the Race App" 
      body="Enter your email address. Then choose a username and password below."
      formboxes={[
        { label: "email", type: "text", placeholder: "email" },
        { label: "username", type: "text", placeholder: "username" },
        { label: "password", type: "password", placeholder: "" }
      ]}
      handleSubmit={this.signup}
    />
    return (
      <Container title="Signup" content={content} cssLabel="signup" {...this.props} />
    )
  }
}

export default Signup