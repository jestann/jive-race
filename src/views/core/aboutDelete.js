import React, { Component } from 'react'
import content from './../content/about'

class About extends Component {
  render () {
    return (
      <Container title="About" markdown={content} cssLabel="about" {...this.props} />
    )
  }
}

export default About