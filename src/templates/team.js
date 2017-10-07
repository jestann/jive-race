import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from './../components/container'
import './../styles/teams.css'

class Team extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      name: "One", 
      body: "We are the best team.", 
      members: [
        { name: "Ann", age: 20 },
        { name: "Joe", age: 40 },
        { name: "Ka", age: 65 }
      ]
    }
  }
  
  render () {
    let title = 'Team: ' + this.state.name
    let members = this.state.members.map((member) => (<div><Link to="/user">{member.name}, age {member.age}</Link></div>))
    let content = (
      <div className='info'>
        <div className='body'>{this.state.body}</div>
        <div className='body'>{members}</div>
      </div>
    )
    
    return (
      <Container title={title} content={content} cssLabel="team" />
    )
  }
}

export default Team