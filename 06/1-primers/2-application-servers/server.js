import express from 'express';

const app = express();


/* 
Let's improve our mythical creatures collection website by adding a route for just getting the data, not the HTML.

Create an Express application that exposes a GET endpoint at /creatures that returns a JSON response with a list of creatures.

Use this following array of creatures:
*/
export const creatures = [
  { name: 'Smaug', type: 'dragon', color: 'red', location: 'mountains' },
  { name: 'Fluffy', type: 'unicorn', color: 'white', location: 'forest' },
  { name: 'Gruff', type: 'griffin', color: 'brown', location: 'mountains' },
  { name: 'Nessie', type: 'sea serpent', color: 'green', location: 'ocean' },
  { name: 'Rex', type: 'dragon', color: 'green', location: 'forest' },
  { name: 'Saphira', type: 'dragon', color: 'blue', location: 'mountains' },
  { name: 'Rarity', type: 'unicorn', color: 'pink', location: 'forest' },
  { name: 'Pegasus', type: 'winged horse', color: 'white', location: 'mountains' },
  { name: 'Merlin', type: 'wizard', location: 'forest' },
];

// 👇👇👇👇 define a route handler for the `/creatures` route

// YOUR CODE HERE



// NOTE: Do not start the server with app.listen() here. We will do that in the test file.

export default app;
