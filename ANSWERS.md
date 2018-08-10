<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    > a Middleware is a function or series of actions that executes before your routes (which are also middleware), we can create middleware to check for authorized users on protected routes. Sessions are basically cookies. They send a cookie to your browser and then use that to authenticate. Bcrypt is a library for hashing your passwords. JWT is a json web token that contains encrypted data about the authorized user. The server decodes and verifies the token to authenticate the user. The JWT is often stored on localstorage and must be sent with every request.
2.  What does bcrypt do in order to prevent attacks?
    > bcrypt hashes your password which means that it uses an algorithm in order to make your password hard to decrypt.
3.  What are the three parts of the JSON Web Token?
    > Header - which contains all of the meta data about the token. Payload - which contains the data of the token, usually a user. Signature - this is the secret that encrypts the entire key.
