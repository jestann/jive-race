import React from 'react'
import { Link } from 'react-router-dom'
import './../../css/navigation/glink.css'

/* Links for the Greeting Bar in the Navbar */
const Glink = (props) => {
  let cssLabel = props.cssLabel ? 'glink ' + props.cssLabel : 'glink'
  let img = props.src ? <img className='glink-image' src={props.src} alt={props.alt} width="18" height="18" /> : ""
  let label = props.link ? <Link className='glink-link' to={props.link}>{props.label}</Link> : props.label
  
  // is it a button or a link? does it have an onClick property?
  if (props.onClick) {
    return (
      <span className={cssLabel} onClick={props.onClick}>
        <div className='glink-image-div'>{img}</div>
        <div className='glink-label' content={props.label}>{label}</div>
      </span>
    )
  } else {
    return (
      <span className={cssLabel}>
        <div className='glink-image-div'>{img}</div>
        <div className='glink-label' content={props.label}>{label}</div>
      </span>
    )
  }
}

export default Glink