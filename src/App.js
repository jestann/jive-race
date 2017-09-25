import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Logo extends Component {
  render () {
    return (
      <div className="logo">
        <img src={logo} className="logo-image" alt="logo" />
        <div className="logo-text">Race App</div>
      </div>
    )
  }
  
}

class Navlink extends Component {
  constructor (props) { // is this a useless constructor?
    super(props)
  }
  
  render () {
    return (
      <div className="navlink">
        <a href={this.props.link}>{this.props.label}</a>
      </div>
    )
  }
}

class Navbar extends Component {
  render () {
    return (
      <div className="navbar">
        <Logo />
        <Navlink link="" label="Contact" />
        <Navlink link="" label="Teams" />
        <Navlink link="" label="Race 2018" />
        <Navlink link="" label="Register" />
        <Navlink link="" label="Home" />
      </div>
    )
  }
}

class Test extends Component {
  constructor (props) {
    super(props)
    this.state = { greeting: 'Hello' }
  }
  
  changeGreeting () {
    this.setState({ greeting: 'Hi' })
  }
  
  render () {
    return (
      <div className="Test">
        <h1>{this.props.title}</h1>
        <p>{this.state.greeting} world!</p>
        <button className="greeting-button" onClick={() => this.changeGreeting()}>Change the greeting!</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Test title="Hey what up." />
      </div>
    );
  }
}

export default App;

// NOTES.

// <img src={logo} className="App-logo" alt="logo">