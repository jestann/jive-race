import React from 'react'
import Form from './../../components/forms/form'
import './../../css/main/main.css'

const Register = () => (
  <Form 
    heading="Register for Race 2018" 
    body="Fill in your data below to register for this year's race."
    formboxes={[
      { label: "name", type: "text", placeholder: "name" },
      { label: "bio", type: "textarea", placeholder: "Talk about yourself here." }, 
      { label: "age", type: "text", placeholder: "age" }
    ]}
  />
)

// no props passed at present

export default Register