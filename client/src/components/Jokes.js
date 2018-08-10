import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
  state = {
    jokes: []
  };
  componentDidMount() {
    const token = localStorage.getItem('jwt');

    const reqOptions = {
      headers: {
        Authorization: token
      }
    };
    axios
      .get('http://localhost:5000/api/jokes', reqOptions)
      .then(res => {
        console.log(res.data);
        this.setState({ jokes: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    if (!localStorage.getItem('jwt')) {
      return <h2>You must log in to see that</h2>;
    }
    if (this.state.jokes.length == 0) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
        {this.state.jokes.map(({ id, setup, punchline }) => (
          <div key={id}>
            <h3>{setup}</h3>
            <h4>{punchline}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Jokes;
