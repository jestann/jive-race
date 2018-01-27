import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MessageBox from './navigation/messageBox'
import './../css/main.css'

import Home from './../views/core/home'
import Register from './../views/core/register'
import CurrentRace from './../views/core/currentRace'
import CurrentTeams from './../views/core/currentTeams'
import Contact from './../views/core/contact'

import Signup from './../dataContainers/signup'
import Login from './../dataContainers/login'

import Edit from './../views/edit/edit'

import User from './../dataContainers/user'
import Race from './../views/show/race'
import Team from './../views/show/team'
import Result from './../views/show/result'

import Results from './../views/show/results'

const Main = (props) => (
  <div className="main">
    <MessageBox {...props} />
    <Switch>
      <Route exact path="/" render={() => <Home {...props} />} />
      <Route path="/register" render={() => <Register {...props} />} />
      <Route path="/currentrace" component={() => <CurrentRace {...props} />} />
      <Route path="/currentteams" component={() => <CurrentTeams {...props} />} />
      <Route path="/contact" component={() => <Contact {...props} />} />
      
      <Route path="/signup" component={() => <Signup {...props} />} />
      <Route path="/login" component={() => <Login {...props} />} />

      <Route path="/edit" component={() => <Edit {...props} />} />

      <Route path="/user/:userId" component={() => <User {...props} />} />
      <Route path="/race" component={() => <Race {...props} />} />
      <Route path="/team" component={() => <Team {...props} />} />
      <Route path="/result" component={() => <Result {...props} />} />

      <Route path="/results" component={() => <Results {...props} />} />
    </Switch>
  </div>
)

export default Main