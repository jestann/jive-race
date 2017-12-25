import React, { Component } from 'react'
import Container from './../components/container'
import './../styles/main.css'

import starting from './../assets/images/starting.jpg'

class Home extends Component {
  render () {
    let describe = "Let's talk about the race here."
    let image = <img src={starting} className="img" alt="running as a team" />
    let content = <div>{describe}{image}</div>

    return (
      <Container title="Let's Jive." content={content} cssLabel="home" {...this.props} />
    )
  }
}

export default Home