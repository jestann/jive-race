import React, { Component } from 'react'
// import { Link } from 'react-router'
import './../styles/navbar.css'

class Navlink extends Component {
  constructor (props) { // is this a useless constructor?
    super(props)
  }
  
  render () {
    let fontClass = (this.props.currentTab === this.props.label) ? "current" : ""
    
    return (
      <div className="navlink">
        <a content={this.props.label} className={fontClass} onClick={() => this.props.changeTab(this.props.label)}>
          {this.props.label}
        </a>
      </div>
    )
  }
}

export default Navlink