import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/icons/running-team.png'
import './../../css/navigation/logo.css'

const Logo = (props) => (
  <div className="logo">
    <Link to="/"><img src={logo} className="logo-image" alt="Jive team running logo" /></Link>
    <Link className="logo-title" to="/">Jive Race</Link>
  </div>
)

export default Logo