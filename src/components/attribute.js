import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './../styles/attribute.css'

class Attribute extends Component {
  render () {
    let attribute = null
    if (this.props.link) {
        attribute = 
    }
    return (
    <div className="body-list-item" key={i}><Link to="/race">{race.name}</Link> in {race.year}</div>
        <div className='body'>Bio: {this.state.bio}</div>
        <div className='body'>Team: <Link to="/team">{this.state.team}</Link></div>
        <div className='body'>
          <div className='body-header'>Races</div>
          <div className='body-list'>{races}</div>
        </div>
        <div className='body-link'><Link to="/results">Results</Link></div>
      </div>
    )
  }
}

export default Attribute