import React, { Component } from 'react'
import Container from './../components/container'
import './../styles/main.css'

class About extends Component {
  render () {
    let content = <div><p>hello</p><p>hello test</p><p>testing</p></div>
    return (
      <Container title="About" content={content} cssName="about" />
    )
  }
}

export default About