import React from 'react'
import PropTypes from 'prop-types'
import './../../css/atoms/title.css'

const Title = (props) => (
  <div className="title">{props.title}</div>
)

Title.propTypes = {
    title: PropTypes.string
}

export default Title