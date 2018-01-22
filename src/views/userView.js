import React from 'react'
import { Link } from 'react-router-dom'
import Title from './../components/title'
import AttributeList from './../components/attributeList'
import Attribute from './../components/attribute'
import './../css/show.css'

function UserView (props) {
  let title = 'User: ' + props.userBeingViewed.name
  let racesList = props.userBeingViewed.races.map((race) => ({ content: race.name, link: "/race", postlink: (' in ' + race.year), long: false }))
  let editPath = '/users/' + props.userBeingViewed.id + '/edit' // need to use in render
  let editCss = props.editPermission ? 'show-button' : 'show-button hidden'
  let deleteCss = props.deletePermission ? 'show-button' : 'show-button hidden'

  if (props.loading) {
    return (
      <div className="loading">Loading ... please wait.</div>
    )
  } else if (props.userInactivated) {
    return (
      <div className="inactivated">This user has been deleted.</div>
    )
  } else {
    return (
      <div className="container">
        <Title title={title} />
        <div className='show'>
          <Attribute label='Bio' content={props.userBeingViewed.bio} long={true} />
          <Attribute label='Team' content={props.userBeingViewed.team} link='/team' long={false} />
          <AttributeList header='Races' items={racesList} />
          <Attribute label='' content='Results' link='/results' long={false} />
          <Link className={editCss} to='/edit'>Edit Profile</Link>
          <Link className={deleteCss} onClick={props.handleDelete}>Delete Account</Link>
        </div>
      </div>
    )
  }
}

export default UserView