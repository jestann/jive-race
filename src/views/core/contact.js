import React from 'react'
import Form from './../../components/forms/form'
import './../../css/views/view.css'

const Contact = (props) => {
  <Form 
    heading="Contact Us" 
    body="Have something you want to say? We're here to listen."
    formboxes={[
      { label: "name", type: "text", placeholder: "name" },
      { label: "email", type: "text", placeholder: "email" },
      { label: "body", type: "textarea", placeholder: "Let us know what you're thinking." }, 
    ]}
  />
}

export default Contact