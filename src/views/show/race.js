import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Title from './../../components/atoms/title'
import AttributeList from './../../components/atoms/attributeList'
import Attribute from './../../components/atoms/attribute'
import './../../css/views/view.css'

class Race extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      editCss: '', // or ' hidden'
      deleteCss: '',
      name: "Super Cool Race", 
      year: "2018",
      body: "This is the best race.", 
      date: "Today",
      teams: [
          { name: "One", body: "We are number one."},
          { name: "Two", body: "We are number two."},
          { name: "Three", body: "We are number three."}
      ],
      runners: [
        { name: "Ann", age: 20 },
        { name: "Joe", age: 40 },
        { name: "Ka", age: 65 }
      ]
    }
  }
  
  handleDelete () {
    // confirm if delete the race
  }
  
  render () {
    let title = 'Race: ' + this.state.name
    let teamsList = this.state.teams.map((team) => ({ content: team.name, link: "/team", postlink: (' | ' + team.body), long: false }))
    let runnersList = this.state.runners.map((runner) => ({ content: runner.name, link: "/user/id", postlink: (', age ' + runner.age), long: false }))
    
    let editCss = 'show-button' + this.state.editCss
    let deleteCss = 'show-button' + this.state.deleteCss
    
    return (
      <div className='show'>
        <Title title={title} />
        <Attribute label='Year' content={this.state.year} long={false} />
        <Attribute label='Date' content={this.state.date} long={false} />
        <Attribute label='Why?' content={this.state.body} long={true} />
        <AttributeList header='Teams' items={teamsList} />
        <AttributeList header='Runners' items={runnersList} />
        <Attribute label='' content='Results' link='/results' long={false} />
        <Link className={editCss} to='/edit'>Edit Race</Link>
        <Link className={deleteCss} to='/' onClick={this.handleDelete}>Delete Race</Link>
      </div>
    )
  }
}

export default Race