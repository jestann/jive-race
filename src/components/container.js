import React, { Component } from 'react'
import Markdown from 'react-markdown'

import Title from './../components/title'
import ErrorBox from './../components/errorBox'
import './../styles/main.css'

class Container extends Component {
  constructor (props) {
    super(props)
    this.state = { isVisible: this.props.errorVisible, error: this.props.error }
  }
  
  handleError () {
    this.setState({ isVisible: false })
  }
  
  render () {
    let content = (this.props.markdown) ? <Markdown source={this.props.markdown} /> : (this.props.content)
    let cssLabel = 'hero ' + this.props.cssLabel
    return (
      <div className='container'>
        <Title title={this.props.title} />
        <div className={cssLabel}>
          <ErrorBox isVisible={this.state.isVisible} handleError={()=>this.handleError()} error={this.state.error} />
          <div className='container-body'>
            {content} 
          </div>
        </div>
      </div>
    )
  }
}

export default Container