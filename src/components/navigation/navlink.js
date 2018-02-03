import React from 'react'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'reactstrap';
import './../../css/navlink.css'

const Navlink = (props) => (
  <NavLink {...props} exact className='navlink'>
    {props.label}
  </NavLink>
)

export default Navlink

// "exact" before className fixed '/' link always active
// activeClassName doesn't work currently