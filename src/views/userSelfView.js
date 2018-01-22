import React from 'react'
import { Link } from 'react-router-dom'
import Title from './../components/title'
import AttributeList from './../components/attributeList'
import Attribute from './../components/attribute'
import './../css/show.css'

function UserSelfView (props) {
  let title = 'User: ' + props.user.name
  let racesList = props.user.races.map((race) => ({ content: race.name, link: "/race", postlink: (' in ' + race.year), long: false }))
  let editCss = 'show-button' + props.editCss
  let deleteCss = 'show-button' + props.deleteCss

  return (
    <div className="container">
      <Title title={title} />
      <div className='show'>
        <Attribute label='Bio' content={props.user.bio} long={true} />
        <Attribute label='Team' content={props.user.team} link='/team' long={false} />
        <AttributeList header='Races' items={racesList} />
        <Attribute label='' content='Results' link='/results' long={false} />
        <Link className={editCss} to='/edit'>Edit Profile</Link>
        <Link className={deleteCss} to='/signup' onClick={props.handleDelete}>Inactivate Account</Link>
      </div>
    </div>
  )
}

export default UserSelfView