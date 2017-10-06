import React, { Component } from 'react'
import Container from './../components/container'
import './../styles/main.css'

import TeamSmall from './teamSmall'

class Teams extends Component {
  constructor (props) {
    super(props)
    this.state = {
      teams: [{name: "hi", body: "hello"}, {name: "hi", body: "hello"}]
    }
  }
  
  handleDelete (i) {
    console.log("delete")
    console.log(this.state)
    let teams = this.state.teams.slice() // still modifies state directly without slice
    teams.splice(i, 1)
    this.setState({teams: teams})
  }
  
  componentWillMount() {
    console.log("yay")
    // will render once before get data
    
  }
  
  render () {
    let content = this.state.teams.map((team, i) =>
          <TeamSmall name={team.name} body={team.body} key={i} handleDelete={() => this.handleDelete(i)} />
        )
    return (
      <Container title="Teams" content={content} cssName="teams" />
    )
  }
}

export default Teams



// Notes

// use react life cycle methods
// loading - componentDidMount(), also constructor
// mount = dom is ready for manipulation
// 1 - constructor, willmount, render, didmount
// fetch / axios library
