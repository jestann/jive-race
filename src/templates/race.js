import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from './../components/container'
import './../styles/main.css'

class Race extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      name: "Super Cool Race", 
      year: "2018",
      body: "This is the best race.", 
      date: "Today",
      teams: [
          { name: "One", body: "We are number one."},
          { name: "Two", body: "We are number two."},
          { name: "Three", body: "We are number three."}
      ],
      runners: [
        { name: "Ann", age: 20 },
        { name: "Joe", age: 40 },
        { name: "Ka", age: 65 }
      ]
    }
  }
  
  render () {
    let title = 'Race: ' + this.state.name
    let teams = this.state.teams.map((team, i) => (<div className="body-list-item" key={i}><Link to="/team">{team.name}</Link> | {team.body}</div>))
    let runners = this.state.runners.map((runner, i) => (<div className="body-list-item" key={i}><Link to="/user">{runner.name}</Link>, age {runner.age}</div>))
    let content = (
      <div className='info'>
        <div className='body'>Year: {this.state.year}</div>
        <div className='body'>Date: {this.state.date}</div>
        <div className='body'>Description: {this.state.body}</div>
        <div className='body'>
            <div className='body-header'>Teams</div>
            <div className='body-list'>{teams}</div>
        </div>
        <div className='body'>
            <div className='body-header'>Runners</div>
            <div className='body-list'>{runners}</div>
        </div>
        <div className='body-link'><Link to="/results">Results</Link></div>
      </div>
    )
    
    return (
      <Container title={title} content={content} cssLabel="race" {...this.props} />
    )
  }
}

export default Race