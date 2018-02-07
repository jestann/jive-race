import React from 'react'
import PropTypes from 'prop-types'
import Form from './../../components/forms/form'
import './../../css/views/view.css'

const LoginView = (props) => (
  <div className="view">
    <Form 
      heading="Log in to Jive Race" 
      body="Enter your user credentials below."
      formboxes={[
        { label: "username", type: "text", placeholder: "username" },
        { label: "password", type: "password", placeholder: "" }
      ]}
      handleSubmit={props.login}
    />
  </div>
)

LoginView.propTypes = {
  login: PropTypes.func.isRequired
}

export default LoginView