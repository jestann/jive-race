import React, { Component } from 'react'
import Container from './../components/container'
import './../styles/main.css'

class Race extends Component {
  render () {
    let content = <div><p>hello</p><p>hello test</p><p>testing</p></div>
    return (
      <Container title="Race 2018" content={content} cssName="race" />
    )
  }
}

export default Race