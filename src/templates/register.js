import React, { Component } from 'react'
import Container from './../components/container'
import './../styles/main.css'

class Register extends Component {
  render () {
    let content = <div><p>hello</p><p>hello test</p><p>testing</p></div>
    return (
      <Container title="Register" content={content} cssName="register" />
    )
  }
}

export default Register