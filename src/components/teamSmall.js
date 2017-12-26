import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from './button'
import './../css/teams.css'

class TeamSmall extends Component {
  render () {
    let body = this.props.body.length > 31 ? this.props.body.slice(0,30) + '...' : this.props.body
    let joinTeamButton = this.props.joined ? <div className="already">Already joined.</div> : <Button label="Join Team" onClick={this.props.handleJoin} />
    return (
      <div className='team-small'>
        <Link className="heading" to="/team">Team {this.props.name}</Link>
        <div className='body'>{body}</div>
        {joinTeamButton}
        <Button label="Delete Team" onClick={this.props.handleDelete} />
      </div>
    )
  }
}

export default TeamSmall