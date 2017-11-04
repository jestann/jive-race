import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from './../components/container'
import './../styles/main.css'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      name: "Ann", 
      bio: "I am the best runner.",
      team: "One",
      races: [
        { name: "Best Race Ever", year: "2016" },
        { name: "Super Race", year: "2017" },
        { name: "Super Cool Race", year: "2018" }
      ]
    }
  }
  
  render () {
    let title = 'User: ' + this.state.name
    let races = this.state.races.map((race, i) => (<div className="body-list-item" key={i}><Link to="/race">{race.name}</Link> in {race.year}</div>))
    let content = (
      <div className='info'>
        <div className='body'>Bio: {this.state.bio}</div>
        <div className='body'>Team: <Link to="/team">{this.state.team}</Link></div>
        <div className='body'>
          <div className='body-header'>Races</div>
          <div className='body-list'>{races}</div>
        </div>
        <div className='body-link'><Link to="/results">Results</Link></div>
      </div>
    )
    
    return (
      <Container title={title} content={content} cssLabel="user" {...this.props} />
    )
  }
}

export default User

// {this.props.params.userId}