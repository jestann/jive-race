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
      values: 'no values yet',
      submission: 'no submission yet',
      fetcher: fetcher
    }
    this.signup = this.signup.bind(this)
  }

  async signup (labelsArray, valuesArray) {
    let values = labelsArray.map((label, i) => (<div key={i}>{label}: {valuesArray[i]}</div>))
    this.setState({ values: values })
    
    let submission = {}
    labelsArray.forEach((label, i) => { submission[label] = valuesArray[i] })
    console.log(submission)
    
    let data = await this.state.fetcher.authRegister(submission.email, submission.username, submission.password)
    if (data.success) {
      this.setState({ values: this.state.fetcher.token })
    } else {
      this.setState({ values: this.state.fetcher.error.error })
    }
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
    
    let content = <div>{form}submission: {this.state.values}</div>
    
    return (
      <Container title="Signup" content={content} cssLabel="signup" {...this.props} />
    )
  }
}

export default Signup