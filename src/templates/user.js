import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from './../components/container'
import AttributeList from './../components/attributeList'
import Attribute from './../components/attribute'

import './../styles/main.css'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      editCss: '', // or ' hidden'
      deleteCss: '',
      name: "Ann", 
      bio: "I am the best runner.",
      team: "One",
      races: [
        { name: "Best Race Ever", year: "2016" },
        { name: "Super Race", year: "2017" },
        { name: "Super Cool Race", year: "2018" }
      ]
    }
  }
  
  handleDelete () {
    // confirm if delete the user
  }
  
  render () {
    let title = 'User: ' + this.state.name
    let racesList = this.state.races.map((race) => ({ content: race.name, link: "/race", postlink: (' in ' + race.year), long: false }))
    
    let editCss = 'show-button' + this.state.editCss
    let deleteCss = 'show-button' + this.state.deleteCss
    
    let content = (
      <div className='show'>
        <Attribute label='Bio' content={this.state.bio} long={true} />
        <Attribute label='Team' content={this.state.team} link='/team' long={false} />
        <AttributeList header='Races' items={racesList} />
        <Attribute label='' content='Results' link='/results' long={false} />
        <Link className={editCss} to='/edit'>Edit User</Link>
        <Link className={deleteCss} to='/signup' onClick={this.handleDelete}>Delete User</Link>
      </div>
    )
    
    return (
      <Container title={title} content={content} cssLabel="user" {...this.props} />
    )
  }
}

export default User

// {this.props.params.userId}