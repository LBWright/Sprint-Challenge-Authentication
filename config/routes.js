const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../database/dbConfig');
const keys = require('../_secrets/keys');

const { authenticate } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  if (!req.body.username || !req.body.password) {
    return res
      .status(400)
      .json({ error: 'Username and password is required for registration' });
  }
  const newUser = req.body;
  newUser.password = bcrypt.hashSync(newUser.password, 10);
  db('users')
    .insert(newUser)
    .then(ids => {
      db('users')
        .where({ id: ids[0] })
        .first()
        .then(user => {
          const token = generateToken(user);
          res.status(201).json(token);
        })
        .catch(err => {
          throw err;
        });
    })
    .catch(err => res.status(500).json(err));
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}

function generateToken(user) {
  const payload = {
    username: user.username
  };
  const options = {
    expiresIn: '6h',
    jwtid: '1234567'
  };

  return jwt.sign(payload, keys.jwtKey, options);
}
