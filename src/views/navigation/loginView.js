import React from 'react'
import Form from './../../components/forms/form'
import './../../css/view.css'

function LoginView (props) {
  return (
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
}

export default LoginView