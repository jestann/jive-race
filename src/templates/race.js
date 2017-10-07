import React, { Component } from 'react'
import Container from './../components/container'
import './../styles/main.css'

import content from './../content/about'

class Race extends Component {
  render () {
    return (
      <Container title="Race 2018" markdown={content} cssLabel="race" />
    )
  }
}

export default Race