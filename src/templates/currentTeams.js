import React, { Component } from 'react'
import Container from './../components/container'
import TeamSmall from './../components/teamSmall'
import './../styles/teams.css'

class CurrentTeams extends Component {
  constructor (props) {
    super(props)
    this.state = {
      joined: false,
      teams: [
        { name: "One", body: "testing and talking and testing and talking" }, 
        { name: "Two", body: "so much to say about all this stuff" }, 
        { name: "Three", body: "test this here" }
      ]
    }
  }
  
  handleDelete (i) {
    if (i === this.state.joined) { this.setState({ joined: false }) }
    let teams = this.state.teams.slice() // prevents modifying state directly
    teams.splice(i, 1)
    this.setState({ teams: teams })
  }
  
  handleJoin (i) {
    this.setState({ joined: i })
  }

  render () {
    let teams = this.state.teams.map((team, i) =>
      <TeamSmall name={team.name} body={team.body} key={i} joined={this.state.joined === i} handleDelete={() => this.handleDelete(i)} handleJoin={() => this.handleJoin(i)} />
    )
    let joined = (this.state.joined !== false) ? "joined: " + this.state.teams[this.state.joined].name : "Haven't joined a team yet."
    let content = <div>{teams}<div className="joined">{joined}</div></div>
    
    return (
      <Container title="Teams" content={content} cssLabel="teams" {...this.props} />
    )
  }
}

export default CurrentTeams


// mount = dom is ready for manipulation
// constructor, willmount, render, didmount
// fetch / axios library