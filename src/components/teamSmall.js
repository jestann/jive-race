import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from './atoms/button'
import './../../css/teams.css'

/* Refactor this and all interactive team functionality */
const TeamSmall = (props) => {
  let body = props.body.length > 31 ? props.body.slice(0,30) + '...' : props.body
  let joinTeamButton = props.joined ? <div className="already">Already joined.</div> : <Button label="Join Team" onClick={props.handleJoin} />
  return (
    <div className='team-small'>
      <Link className="heading" to="/team">Team {props.name}</Link>
      <div className='body'>{body}</div>
      {joinTeamButton}
      <Button label="Delete Team" onClick={props.handleDelete} />
    </div>
  )
}

export default TeamSmall