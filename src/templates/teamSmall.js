import React, { Component } from 'react'
import './../styles/main.css'

class TeamSmall extends Component {
  render () {
    return (
      <div className='team-small'>
        <h1>Team {this.props.name}</h1>
        <p>{this.props.body}</p>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default TeamSmall