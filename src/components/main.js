import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MessageBox from './navigation/messageBox'
import './../css/main.css'

import Home from './../views/core/home'
import About from './../views/core/about'
import Register from './../views/core/register'
import CurrentRace from './../views/core/currentRace'
import CurrentTeams from './../views/core/currentTeams'
import Contact from './../views/core/contact'

import Signup from './../views/navigation/signup'
import Login from './../views/navigation/login'

import Edit from './../views/edit/edit'

import User from './../views/show/user'
import Race from './../views/show/race'
import Team from './../views/show/team'
import Result from './../views/show/result'

import Results from './../views/show/results'

class Main extends Component {
  render () {
    return (
      <div className="main">
        <MessageBox {...this.props} />
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