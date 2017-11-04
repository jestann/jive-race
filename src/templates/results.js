import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from './../components/container'
import './../styles/main.css'

class Results extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      team: "One",
      race: "2018",
      results: [
        { runner: "Kai", time: "20 seconds" },
        { runner: "Jane", time: "30 seconds" },
        { runner: "Sai", time: "40 seconds" }
      ]
    }
  }
  
  render () {
    let title = 'Results for Team ' + this.state.team
    let results = this.state.results.map((result, i) => (<div className='body-list-item' key={i}><Link to="/user">{result.runner}</Link>: <Link to="/result">{result.time}</Link></div>))
    let content = (
      <div className='info'>
        <div className='body'>Race: <Link to="/race">{this.state.race}</Link></div>
        <div className='body'>
          <div className='body-header'>Results</div>
          <div className='body-list'>
            {results}
          </div>
        </div>
        <div className='body-link'><Link to="/team">Back to Team</Link></div>
      </div>
    )
    
    return (
      <Container title={title} content={content} cssLabel="results" />
    )
  }
}

export default Results