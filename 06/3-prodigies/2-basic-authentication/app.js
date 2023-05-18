// app setup
import express from 'express';
import basicAuth from 'basic-auth';
const app = express();
app.use(express.json());


/* 
Challenge: Implement Basic Auth Middleware
Our rock band already has an express app.  The website has a secret page that only authorized users should be able to access. The authorized users are stored in the `users` array.

Challenge: 
- Create a basicAuth middleware that checks if the username and password match one of the users in the array. If the credentials don't match, return a 401 Unauthorized status code.
- You may use the `basic-auth` package (imported above) or write your own middleware.

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

// Don't change this route
app.get('/secret', auth, (req, res) => {
  res.send('Welcome to the secret page!');
});


export default app;