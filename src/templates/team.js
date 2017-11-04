import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from './../components/container'
import './../styles/main.css'

class Team extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      name: "One", 
      body: "We are the best team.", 
      race: "2018",
      members: [
        { name: "Ann", age: 20 },
        { name: "Joe", age: 40 },
        { name: "Ka", age: 65 }
      ]
    }
  }
  
  render () {
    let title = 'Team: ' + this.state.name
    let members = this.state.members.map((member, i) => (<div className="body-list-item" key={i}><Link to="/user">{member.name}</Link>, age {member.age}</div>))
    let content = (
      <div className='info'>
        <div className='body'>Race: <Link to="/race">{this.state.race}</Link></div>
        <div className='body'>Story: {this.state.body}</div>
        <div className='body'>
          <div className='body-header'>Members</div>
          <div className='body-list'>{members}</div>
        </div>
        <div className='body-link'><Link to="/results">Results</Link></div>
      </div>
    )
    
    return (
      <Container title={title} content={content} cssLabel="team" />
    )
  }
}

export default Team