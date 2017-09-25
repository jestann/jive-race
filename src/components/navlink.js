import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './../styles/navbar.css'

class Navlink extends Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    let fontClass = (this.props.currentTab === this.props.label) ? "current" : ""
    
    return (
      <div className="navlink">
        <Link to={this.props.link} content={this.props.label} className={fontClass} onClick={() => this.props.changeTab(this.props.label)}>
          {this.props.label}
        </Link>
      </div>
    )
  }
}

export default Navlink