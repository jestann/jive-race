import React, { Component } from 'react'
import Container from './../components/container'
import './../styles/main.css'

class Contact extends Component {
  render () {
    let content = <div><p>hello</p><p>hello test</p><p>testing</p></div>
    return (
      <Container title="Contact" content={content} cssName="contact" />
    )
  }
}

export default Contact