import React, { Component } from 'react'
import Container from './../components/container'
import Form from './../components/form'
import './../styles/main.css'

class Login extends Component {
  constructor (props) { 
    super(props)
    this.login = this.login.bind(this)
  }
  
  async login (labelsArray, valuesArray) {
    if (labelsArray && valuesArray) {
      let username = ''
      labelsArray.forEach((label, i) => { if (label==='username') { username = valuesArray[i] } })
      this.props.login({ name: username })
    }
  }
  
  render () {
    let content = <Form 
      heading="Log in to the Race App" 
      body="Enter your user credentials below."
      formboxes={[
        { label: "username", type: "text", placeholder: "username" },
        { label: "password", type: "password", placeholder: "" }
      ]}
      handleSubmit={this.login}
    />
    
    return (
      <Container title="Login" content={content} cssLabel="login" {...this.props} />
    )
  }
}

export default Login