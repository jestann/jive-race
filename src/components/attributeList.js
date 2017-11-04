import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Attribute from '/attribute'
import './../styles/attribute.css'

class AttributeList extends Component {
  render () {
    let items = this.props.items.map((item, i) => (
      <div className="attribute-list-item" key={i}>
        <Attribute />
      </div>
    ))
    
    return ( <div className='attribute-list'>{items}</div> )
  }
}

export default AttributeList