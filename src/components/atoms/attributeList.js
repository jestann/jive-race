import React from 'react'
import PropTypes from 'prop-types'
import Attribute from './attribute'
import './../../css/atoms/attribute.css'

const AttributeList = (props) => {
  let items = props.items.map((item, i) => ( 
    <Attribute 
      keyed={i} // a list's items are keyed
      content={item.content} // label not used in a list
      link={item.link}
      postlink={item.postlink}
      long={item.long}
    /> 
  ))
  return ( 
    <div className='attribute'>
      <div className='attribute-list-header'>{props.header}</div>
      <div className='attribute-list'>{items}</div>
    </div>
  )
}

AttributeList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  header: PropTypes.string.isRequired
}

export default AttributeList