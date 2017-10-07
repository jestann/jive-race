import React, { Component } from 'react'
import Markdown from 'react-markdown'

import Title from './../components/title'
import './../styles/main.css'

class Container extends Component {
  render (props) {
    let content = (this.props.markdown) ? <Markdown source={this.props.markdown} /> : (this.props.content)
    let cssLabel = 'hero ' + this.props.cssLabel
    return (
      <div className='container'>
        <Title title={this.props.title} />
        <div className={cssLabel}>
          <div className='body'>
            {content} 
          </div>
        </div>
      </div>
    )
  }
}

export default Container