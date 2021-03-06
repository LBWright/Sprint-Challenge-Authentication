import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', this.state)
      .then(res => {
        const { token, user } = res.data;
        // if we have time, we'll store the user
        localStorage.setItem('jwt', token);
        this.props.history.push('/jokes');
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
