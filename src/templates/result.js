import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from './../components/container'
import './../styles/main.css'

class Result extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      runner: "Ann", 
      race: "2018",
      team: "One",
      time: "20 seconds"
    }
  }
  
  render () {
    let title = 'Result for ' + this.state.runner + ' for race ' + this.state.race
    let content = (
      <div className='info'>
        <div className='body'>Runner: <Link to="/user">{this.state.runner}</Link></div>
        <div className='body'>Race: <Link to="/race">{this.state.race}</Link></div>
        <div className='body'>Team: <Link to="/team">{this.state.team}</Link></div>
        <div className='body'>Time: {this.state.time}</div>
      </div>
    )
    
    return (
      <Container title={title} content={content} cssLabel="result" {...this.props} />
    )
  }
}

export default Result