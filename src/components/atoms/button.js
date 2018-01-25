import React from 'react'
import { Link } from 'react-router-dom'
import './../../css/atoms/button.css'

const Button = (props) => {
  let cssLabel = props.cssLabel ? 'button ' + props.cssLabel : 'button'
  let img = props.src ? <img src={props.src} alt={props.alt} width="18" height="18" /> : ""
  let label = props.link ? <Link className='button-link' to={props.link}>{props.label}</Link> : props.label
  return (
    <div className={cssLabel} onClick={props.onClick}>
      <div className='button-image'>{img}</div>
      <div className='button-label' content={props.label}>{label}</div>
    </div>
  )
}

export default Button