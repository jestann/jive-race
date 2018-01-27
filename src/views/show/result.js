import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Title from './../../components/atoms/title'
import Attribute from './../../components/atoms/attribute'
import './../../css/views/view.css'

class Result extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      editCss: '', // or ' hidden'
      deleteCss: '',
      runner: "Ann", 
      race: "2018",
      team: "One",
      time: "20 seconds"
    }
  }
  
  handleDelete () {
    // confirm if delete the result
  }
  
  render () {
    let title = 'Result for ' + this.state.runner + ' for race ' + this.state.race
    let editCss = 'show-button' + this.state.editCss
    let deleteCss = 'show-button' + this.state.deleteCss
    
    return (
      <div className='show'>
        <Title title={title} />
        <Attribute label='Runner' content={this.state.runner} link='/user/id' long={false} />
        <Attribute label='Race' content={this.state.race} link='/race' long={false} />
        <Attribute label='Team' content={this.state.team} link='/team' long={false} />
        <Attribute label='Time' content={this.state.time} long={false} />
        <Link className={editCss} to='/edit'>Edit Result</Link>
        <Link className={deleteCss} to='/results' onClick={this.handleDelete}>Delete Result</Link>
      </div>
    )
  }
}

export default Result