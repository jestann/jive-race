import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './../css/main.css'

import Home from './../views/home'
import About from './../views/about'
import Register from './../views/register'
import CurrentRace from './../views/currentRace'
import CurrentTeams from './../views/currentTeams'
import Contact from './../views/contact'

import Signup from './../views/signup'
import Login from './../views/login'

import Edit from './../views/edit'

import Results from './../views/results'

import User from './../views/user'
import Race from './../views/race'
import Team from './../views/team'
import Result from './../views/result'


class Main extends Component {
  render () {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" render={() => <Home {...this.props} />} />
          <Route exact path="/about" render={() => <About {...this.props} />} />
          <Route exact path="/register" render={() => <Register {...this.props} />} />
          <Route exact path="/currentrace" component={() => <CurrentRace {...this.props} />} />
          <Route exact path="/currentteams" component={() => <CurrentTeams {...this.props} />} />
          <Route exact path="/contact" component={() => <Contact {...this.props} />} />
          
          <Route exact path="/signup" component={() => <Signup {...this.props} />} />
          <Route exact path="/login" component={() => <Login {...this.props} />} />

          <Route exact path="/edit" component={() => <Edit {...this.props} />} />

          <Route exact path="/results" component={() => <Results {...this.props} />} />
      
          <Route exact path="/user" component={() => <User {...this.props} />} />
          <Route exact path="/race" component={() => <Race {...this.props} />} />
          <Route exact path="/team" component={() => <Team {...this.props} />} />
          <Route exact path="/result" component={() => <Result {...this.props} />} />
        </Switch>
      </div>
    )
  }
}

export default Main