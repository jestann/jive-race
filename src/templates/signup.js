import React, { Component } from 'react'
import Container from './../components/container'
import Form from './../components/form'
import './../styles/main.css'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = { values: 'no values yet' }
    this.signup = this.signup.bind(this)
  }

  signup (values) {
    this.setState({ values: values })
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
      submit={this.signup}
    />
    
    return (
      <Container title="Signup" content={content} cssLabel="signup" error={this.state.values} {...this.props} />
    )
  }
}

export default Signup