import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from './../components/container'
import './../styles/main.css'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      name: "Ann", 
      bio: "I am the best user.",
      team: "One"
    }
  }
  
  render () {
    let title = 'User: ' + this.state.name
    let content = (
      <div className='info'>
        <div className='body'>Bio: {this.state.bio}</div>
        <div className='body'>Team: <Link to="/team">{this.state.team}</Link></div>
      </div>
    )
    
    return (
      <Container title={title} content={content} cssLabel="user" />
    )
  }
}

export default User

// {this.props.params.userId}