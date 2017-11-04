import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './../styles/main.css'

import Home from './../templates/home'
import About from './../templates/about'
import Register from './../templates/register'
import CurrentRace from './../templates/currentRace'
import CurrentTeams from './../templates/currentTeams'
import Contact from './../templates/contact'

import Results from './../templates/results'

import User from './../templates/user'
import Race from './../templates/race'
import Team from './../templates/team'
import Result from './../templates/result'


class Main extends Component {
  render (props) {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={() => <Home {...props} />} />
          <Route exact path="/about" component={() => <About {...props} />} />
          <Route exact path="/register" component={() => <Register {...props} />} />
          <Route exact path="/currentrace" component={() => <CurrentRace {...props} />} />
          <Route exact path="/currentteams" component={() => <CurrentTeams {...props} />} />
          <Route exact path="/contact" component={() => <Contact {...props} />} />

          <Route exact path="/results" component={() => <Results {...props} />} />
      
          <Route exact path="/user" component={() => <User {...props} />} />
          <Route exact path="/race" component={() => <Race {...props} />} />
          <Route exact path="/team" component={() => <Team {...props} />} />
          <Route exact path="/result" component={() => <Result {...props} />} />
        </Switch>
      </div>
    )
  }
}

export default Main