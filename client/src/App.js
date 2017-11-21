import React, { Component } from 'react';
// import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi There</h1>
        </header>
        <p className="App-intro">
          <a href="/auth/google">Sign in with Google</a>
        </p>
      </div>
    );
  }
}

export default App;