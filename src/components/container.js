import React, { Component } from 'react'
import Markdown from 'react-markdown'

import Title from './../components/title'
import MessageBox from './../components/messageBox'
import './../css/container.css'

class Container extends Component {
  render (props) {
    let content = (this.props.markdown) ? <Markdown source={this.props.markdown} /> : (this.props.content)
    let cssLabel = 'container-body ' + this.props.cssLabel
    return (
      <div className='container-box'>
        <Title title={this.props.title} />
        <div className={cssLabel}>
          <MessageBox {...this.props} />
          <div className='content'>
            {content} 
          </div>
        </div>
      </div>
    )
  }
}

export default Container