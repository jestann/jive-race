import React, { Component } from 'react'
import Container from './../components/container'
import Form from './../components/form'
import './../styles/main.css'

class Register extends Component {
  render () {
    let content = <Form 
      heading="Registration" 
      body="Fill in your data below to register for this year's race."
      formboxes={[{ label: "name", type: "text", placeholder: "name" },
        { label: "bio", type: "textarea", placeholder: "Talk about yourself here." }, 
        { label: "age", type: "text", placeholder: "age" }
      ]}
    />
    
    return (
      <Container title="Register" content={content} cssLabel="register" {...this.props} />
    )
  }
}

export default Register