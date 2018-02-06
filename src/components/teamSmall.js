import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './atoms/button'
import './../css/views/teams.css'

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

TeamSmall.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string, // not sure if required
  joined: PropTypes.bool.isRequired,
  handleJoin: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default TeamSmall