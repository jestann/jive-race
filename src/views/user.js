import React, { Component } from 'react'
import UserView from './userView'
import Fetcher from './../tools/fetcher'
import './../css/main.css'

class User extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      loading: false,
      editPermission: false,
      deletePermission: false,
      userInactivated: false,
      userViewed: {},
      userBeingViewed: {
        id: 1,
        name: "Ann", 
        bio: "I am the best runner.",
        team: "One",
        races: [
          { name: "Best Race Ever", year: "2016" },
          { name: "Super Race", year: "2017" },
          { name: "Super Cool Race", year: "2018" }
        ]
      }
    }
    this.handleDelete = this.handleDelete.bind(this)
  }
  
  handleDelete () {
    let confirmed = confirm("Are you sure you want to deactivate your account?")
    if (confirmed && this.state.userBeingViewed.id === 1 /* this.props.user.id */) {
      // api call
      // redirect here, you deleted yourself.
    } else {
      // api call
      this.setState({userInactivated: true})
    }
  }
  
  render () {
    <UserView {...this.state} handleDelete={this.handleDelete} />
  }
}

export default User

// {this.props.params.userId}