import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from './../components/container'
import Attribute from './../components/attribute'
import './../styles/main.css'

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
    
    let content = (
      <div className='show'>
        <Attribute label='Runner' content={this.state.runner} link='/user' long={false} />
        <Attribute label='Race' content={this.state.race} link='/race' long={false} />
        <Attribute label='Team' content={this.state.team} link='/team' long={false} />
        <Attribute label='Time' content={this.state.time} long={false} />
        <Link className={editCss} to='/edit'>Edit Result</Link>
        <Link className={deleteCss} to='/results' onClick={this.handleDelete}>Delete Result</Link>
      </div>
    )

    return (
      <Container title={title} content={content} cssLabel="result" {...this.props} />
    )
  }
}

export default Result