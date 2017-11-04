import React, { Component } from 'react'
import Markdown from 'react-markdown'

import Title from './../components/title'
import ErrorBox from './../components/errorBox'
import './../styles/main.css'

class Container extends Component {
  render (props) {
    let content = (this.props.markdown) ? <Markdown source={this.props.markdown} /> : (this.props.content)
    let cssLabel = 'hero ' + this.props.cssLabel
    return (
      <div className='container'>
        <Title title={this.props.title} />
        <div className={cssLabel}>
          <ErrorBox error={this.props.error} errorVisible={this.props.errorVisible} handleError={this.props.handleError} />
          <div className='container-body'>
            {content} 
          </div>
        </div>
      </div>
    )
  }
}

export default Container