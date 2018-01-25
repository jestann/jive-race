import React from 'react'
import './../../css/atoms/featureimg.css'

const FeatureImg = (props) => {
  let imgStyle = {backgroundImage: "url('" + this.props.img + "')"}
  // let ratio = (props.dimensionY / props.dimensionX) * 100
  // let afterStyle = {paddingTop: ratio + "%"}
  return (
    <div className="feature-img" style={imgStyle}>
      <div className="feature-padding"></div>
    </div>
  )
}

export default FeatureImg
