import React, { Component } from 'react'
import Title from './../components/title'
import './../styles/main.css'

class Container extends Component {
  render (props) {
    let heroCSS = 'hero ' + this.props.cssName
    return (
      <div className='container'>
        <Title title={this.props.title} />
        <div className={heroCSS}>
          <div className='body'>
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}

export default Container