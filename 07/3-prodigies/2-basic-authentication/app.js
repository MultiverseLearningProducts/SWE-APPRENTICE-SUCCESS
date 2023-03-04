// app setup
import express from 'express';
import basicAuth from 'basic-auth';
const app = express();
app.use(express.json());


/* 
Challenge: Implement Basic Auth Middleware
Create a new Express app that serves as a website for a rock band. The website has a secret page that only authorized users can access.

1. Create an array of objects that contains the following users:
   a. username: 'rockfan', password: 'ilovebands'
   b. username: 'groupie', password: 'backstagepass'
2. Create a basicAuth middleware that checks if the username and password match one of the users in the array. If the credentials don't match, return a 401 Unauthorized status code.
3. Use the basicAuth middleware to protect a secret endpoint ('/secret') that returns the string 'Welcome to the secret page!'

*/

// users (our "db")
export const users = [
  { username: 'rockfan', password: 'ilovebands' },
  { username: 'groupie', password: 'backstagepass' },
];

// Create an `auth` middleware that checks if the username and password match one of the users in the array.
const auth = (req, res, next) => {
  // 👇👇👇 YOUR CODE for the `auth` middleware 👇👇👇




  
  // 👆👆👆 YOUR CODE for the `auth` middleware 👆👆👆
};

// Use the auth middleware to protect a secret endpoint ('/secret')
app.get('/secret', auth, (req, res) => {
  res.send('Welcome to the secret page!');
});


export default app;