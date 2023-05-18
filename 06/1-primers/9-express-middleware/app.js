import express from 'express';
const app = express();

// in memory "database"
import creatures from './creatures.js';

/* 
Our mythical creatures website has a valid route below, but there's a bug: The body is not being parsed as JSON. Fix the bug by adding the appropriate middleware to the server.

*/
// 👇👇👇 YOUR CODE for body parsing middleware





// our provided route for POST /creatures
app.post('/creatures', (req, res) => {
  const creature = req.body;
  creatures.push(creature);
  res.status(201).json(creature);
});

export default app;