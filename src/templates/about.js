import React, { Component } from 'react'
import Container from './../components/container'
import './../css/main.css'

import content from './../content/about'

class About extends Component {
  render () {
    return (
      <Container title="About" markdown={content} cssLabel="about" {...this.props} />
    )
  }
}

export default About