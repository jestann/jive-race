import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Title from './../../components/atoms/title'
import AttributeList from './../../components/atoms/attributeList'
import Attribute from './../../components/atoms/attribute'
import Loading from './../../components/atoms/loading'
import './../../css/views/view.css'

function UserView (props) {
  let title = 'User: ' + props.userData.name
  let racesList = props.userData.races.map((race) => ({ content: race.name, link: "/race", postlink: (' in ' + race.year), long: false }))
  // let editPath = '/users/' + props.userData.id + '/edit' // need to use in render
  let editCss = props.editPermission ? 'show-button' : 'show-button hidden'
  let deleteCss = props.deletePermission ? 'show-button' : 'show-button hidden'

  if (props.loading) {
    return (
      <Loading />
    )
  } else if (props.userInactivated) {
    return (
      // go to home page, with this as a message.
      <div className="inactivated">This user has been deleted.</div>
    )
  } else if (!props.userData) {
    // go to home page, with this as a message.
    return (
      <div className="failed-load">This user failed to load.</div>
    )
  } else {
    return (
      <div className="view">
        <Title title={title} />
        <div className='show'>
          <Attribute label='Bio' content={props.userData.bio} long={true} />
          <Attribute label='Team' content={props.userData.team} link='/team' long={false} />
          <AttributeList header='Races' items={racesList} />
          <Attribute label='' content='Results' link='/results' long={false} />
          <Link className={editCss} to='/edit'>Edit Profile</Link>
          <Link className={deleteCss} onClick={props.handleDelete}>Delete Account</Link>
        </div>
      </div>
    )
  }
}

UserView.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadError: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    bio: PropTypes.string,
    team: PropTypes.string,
    races: PropTypes.shape({
      name: PropTypes.string,
      year: PropTypes.number
    }), // userData is requierd but can be null so not listed as isRequired
  }),
  userInactivated: PropTypes.bool.isRequired,
  editPermission: PropTypes.bool.isRequired,
  deletePermission: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default UserView