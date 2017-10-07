import React, { Component } from 'react'
import Container from './../components/container'
import Form from './../components/form'
import './../styles/main.css'

class Contact extends Component {
  render () {
    let content = <Form 
      heading="Contact Us" 
      body="Have something you want to say? We're here to listen."
      formboxes={[{ label: "name", type: "text", placeholder: "name" },
        { label: "email", type: "text", placeholder: "email" },
        { label: "body", type: "textarea", placeholder: "Let us know what you're thinking." }, 
      ]}
    />
    
    return (
      <Container title="Contact" content={content} cssLabel="contact" />
    )
  }
}

export default Contact