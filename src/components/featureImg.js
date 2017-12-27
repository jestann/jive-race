import React, { Component } from 'react'
import './../css/feature-img.css'

class FeatureImg extends Component {
  render () {
    return (
      <div className="feature-img" style="background-image: {this.props.img};">
        <div className="feature-padding"></div>
      </div>
    )
  }
}

export default FeatureImg
