import React, { Component } from 'react'
import Container from './../components/container'
import './../styles/main.css'

import content from './../content/about'

class Home extends Component {
  render () {
    return (
      <Container title="Home" markdown={content} cssLabel="home" {...this.props} />
    )
  }
}

export default Home