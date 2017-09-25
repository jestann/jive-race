import React, { Component } from 'react'
import { Router, Route } from 'react-router'

import App from './app'
import Main from './components/main'

import Home from './templates/home'
import About from './templates/about'
import Register from './templates/register'
import Race from './templates/race'
import Contact from './templates/contact'

import User from './templates/user'
import Team from './templates/team'
import Teams from './templates/teams'

class MainRouter extends Component {
  render () {
    return (
      <Router>
        <Route path="/" component={App} >
          <Route component={Main}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
            <Route path="/race" component={Race} />
            <Route path="/contact" component={Contact} />
        
            <Route path="/user" component={User} />
            <Route path="/teams" component={Teams} />
            <Route path="/team" component={Team} />
          </Route>
        </Route>
      </Router>
    )
  }
}

export default MainRouter
