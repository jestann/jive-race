import React, { Component } from 'react'
import './../styles/main.css'

class User extends Component {
  render () {
    return (
      <div className='user'>
        UserId: {this.props.params.userId}
      </div>
    )
  }
}

export default User