import React, { Component } from 'react'
import Container from './../components/container'
import './../styles/main.css'

class Home extends Component {
  render () {
    let content = <div><p>hello</p><p>hello test</p><p>testing</p></div>
    return (
      <Container title="Home" content={content} cssName="home" />
    )
  }
}

export default Home