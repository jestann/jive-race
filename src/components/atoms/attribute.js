import React from 'react'
import { Link } from 'react-router-dom'
import './../../css/atoms/attribute.css'

const Attribute = (props) => {
  
  // an attribute could include these props: label, content, link, postlink, key (for a list), long (boolean),
  let postlink = props.postlink ? props.postlink : ''
  let mainCssLabel = 'no-style'
  let attributeLabel = ''
  let attribute = ''

  // if it's keyed, it's an attribute list item
  if (props.keyed >= 0) {
    attribute = <div className='attribute-list-item' key={props.keyed}>
      <Link className='attribute-link' to={props.link}>{props.content}</Link>
      {postlink}
    </div>
  } 
  
  // otherwise, it's a regular attribute
  else {
    mainCssLabel = 'attribute'
    attributeLabel = <div className='attribute-label'>{props.label}</div>
    let cssLabel = 'attribute' + (props.long ? '-long' : '-short')
    
    // does it need linked to a view?
    if (props.link) { 
      attribute = <div className={cssLabel}>
        <Link className='attribute-link' to={props.link}>{props.content}</Link>
        {postlink}
      </div> 
    } else { 
      attribute = <div className={cssLabel}>
        {props.content}
        {postlink}
      </div>
    }
  }

  return (
    <div className={mainCssLabel}>
      {attributeLabel}
      {attribute}
    </div>
  )
}

export default Attribute