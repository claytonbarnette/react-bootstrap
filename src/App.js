import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Restrap</h1>
          <p>
            A basic React Component Library of Bootstrap Components
          </p>
          <p>Developer: Clayton Barnette</p>
        </header>
      </div>
    );
  }
}

export default App;
