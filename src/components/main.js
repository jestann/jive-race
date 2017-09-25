import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './../styles/main.css'

import Home from './../templates/home'
import About from './../templates/about'
import Register from './../templates/register'
import Race from './../templates/race'
import Contact from './../templates/contact'

import User from './../templates/user'
import Team from './../templates/team'
import Teams from './../templates/teams'

class Main extends Component {
  render () {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/race" component={Race} />
          <Route exact path="/contact" component={Contact} />
      
          <Route exact path="/user" component={User} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/team" component={Team} />
        </Switch>
      </div>
    )
  }
}

export default Main