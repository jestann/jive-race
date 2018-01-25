import React, { Component } from 'react'
import Markdown from 'react-markdown'
import MessageBox from './../navigation/messageBox'
import './../../css/atoms/container.css'

class Container extends Component {
  render (props) {
    let content = (this.props.markdown) ? <Markdown source={this.props.markdown} /> : (this.props.content)
    return (
      <div className='container-body'>
        <MessageBox {...this.props} />
        <div className='content'>
          {content}
        </div>
      </div>
    )
  }
}

export default Container