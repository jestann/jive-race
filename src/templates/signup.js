import React, { Component } from 'react'
import Container from './../components/container'
import Form from './../components/form'
import Fetcher from './../tools/fetcher'
import './../styles/main.css'

class Signup extends Component {
  constructor (props) {
    super(props)
    let fetcher = new Fetcher()
    this.state = { 
      submission: 'no submission yet',
      fetcher: fetcher
    }
    this.signup = this.signup.bind(this)
  }

  signup (labelsArray, valuesArray) {
    let submission = labelsArray.map((label, i) => (<div>{label}: {valuesArray[i]}</div>))
    this.setState({ submission: submission })
  }
  
  render () {
    let form = <Form 
      heading="Sign up to join the Race App" 
      body="Enter your email address. Then choose a username and password below."
      formboxes={[
        { label: "email", type: "text", placeholder: "email" },
        { label: "username", type: "text", placeholder: "username" },
        { label: "password", type: "password", placeholder: "" }
      ]}
      handleSubmit={this.signup}
    />
    
    let content = <div>{form}submission: {this.state.submission}</div>
    
    return (
      <Container title="Signup" content={content} cssLabel="signup" {...this.props} />
    )
  }
}

export default Signup