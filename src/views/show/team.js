import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Title from './../../components/atoms/title'
import AttributeList from './../../components/atoms/attributeList'
import Attribute from './../../components/atoms/attribute'
import './../../css/views/view.css'

class Team extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      editCss: '', // or ' hidden'
      deleteCss: ' hidden',
      name: "One", 
      body: "We are the best team.", 
      race: "2018",
      members: [
        { name: "Ann", age: 20 },
        { name: "Joe", age: 40 },
        { name: "Ka", age: 65 }
      ]
    }
  }
  
  handleDelete () {
    // confirm if delete the team
  }
  
  render () {
    let title = 'Team: ' + this.state.name
    let membersList = this.state.members.map((member) => ({ content: member.name, link: "/user/id", postlink: (', age ' + member.age), long: false }))
    
    let editCss = 'show-button' + this.state.editCss
    let deleteCss = 'show-button' + this.state.deleteCss
    
    return (
      <div className='show'>
        <Title title={title} />
        <Attribute label='Race' content={this.state.race} link='/race' long={false} />
        <Attribute label='Story' content={this.state.body} long={true} />
        <AttributeList header='Members' items={membersList} />
        <Attribute label='' content='Results' link='/results' long={false} />
        <Link className={editCss} to='/edit'>Edit Team</Link>
        <Link className={deleteCss} to='/race' onClick={this.handleDelete}>Delete Team</Link>
      </div>
    )
  }
}

export default Team