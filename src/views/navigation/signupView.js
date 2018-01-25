import React from 'react'
import Form from './../../components/forms/form'
import './../../css/views/view.css'

const SignupView = (props) => {
    <Form 
      heading="Sign up to join Jive Race" 
      body="Enter your email address. Then choose a username and password below."
      formboxes={[
        { label: "email", type: "text", placeholder: "email" },
        { label: "username", type: "text", placeholder: "username" },
        { label: "password", type: "password", placeholder: "" }
      ]}
      handleSubmit={props.signup}
    />
}

export default SignupView