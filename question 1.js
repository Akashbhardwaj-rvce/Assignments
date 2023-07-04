const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check username requirements
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  const usernameLength = username.length;
  if (!alphanumericRegex.test(username) || usernameLength < 6 || usernameLength > 12) {
    return res.status(400).json({ error: 'Invalid username' });
  }

  // Check password requirements
  const passwordLength = password.length;
  const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()\-_=+{}[\]|\\:;"'<>,.?/~`]+$/;

  if (!passwordRegex.test(password) || passwordLength < 6) {
    return res.status(400).json({ error: 'Invalid password' });
  }

  // Authenticate the user (you can replace this with your own logic)
  // For simplicity, we'll assume the username and password are correct
  // You would typically use a database to validate the user credentials
  // or integrate with an authentication service like Passport.js

  // Return success message
  res.json({ message: 'Login successful' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
