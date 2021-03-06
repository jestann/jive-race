import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
// import { NavLink } from 'reactstrap';
import './../../css/navlink.css'

const Navlink = (props) => (
  <NavLink {...props} exact className='navlink'>
    {props.label}
  </NavLink>
)

Navlink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired // this is what's passed as {...props} to NavLink
}

export default Navlink

// "exact" before className fixed '/' link always active
// activeClassName doesn't work currently