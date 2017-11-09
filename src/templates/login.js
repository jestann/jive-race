import React, { Component } from 'react'
import Container from './../components/container'
import Form from './../components/form'
import './../styles/main.css'

class Login extends Component {
  render () {
    let content = <Form 
      heading="Log in to the Race App" 
      body="Enter your user credentials below."
      formboxes={[
        { label: "username", type: "text", placeholder: "username" },
        { label: "password", type: "password", placeholder: "" }
      ]}
    />
    
    return (
      <Container title="Login" content={content} cssLabel="login" {...this.props} />
    )
  }
}

export default Login