import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Jokes from './components/Jokes';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/jokes">Jokes</Link>
        </div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default App;
