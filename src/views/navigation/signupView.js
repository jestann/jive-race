import React from 'react'
import PropTypes from 'prop-types'
import Form from './../../components/forms/form'
import './../../css/views/view.css'

const SignupView = (props) => (
    <Form 
      heading="Sign up for an account with Jive Race" 
      body="Enter your email address. Then choose a username and password below."
      formboxes={[
        { label: "email", type: "text", placeholder: "email" },
        { label: "username", type: "text", placeholder: "username" },
        { label: "password", type: "password", placeholder: "" }
      ]}
      handleSubmit={props.signup}
    />
)

SignupView.propTypes = {
  signup: PropTypes.func.isRequired
}

export default SignupView