import express from 'express';

// database and the Creature model
import { db, Creature } from './db';

// Create the Express app
const app = express();

// Parse JSON bodies
app.use(express.json());

/*
Our website has grown in popularity and now we need to make sure we're handling all our traffic smoothly. To do that, we need to make sure we're retrieving all creatures in our database as quickly as possible.
Create a GET endpoint at /creatures that retrieves all creatures from the database and returns a JSON response.
*/
// 👇👇👇 YOUR CODE for `GET /creatures`





/*
You've heard of unicorns, dragons, and griffins, but have you ever wanted to get up close and personal with one? Look no further than our mythical creature database! We've got everything from fiery dragons to majestic unicorns, and with this route, you can retrieve just one specific creature by providing its ID.
Create a GET endpoint at /creatures/:id that retrieves just one creature from the database and returns a JSON response.
*/
// 👇👇👇 YOUR CODE for `GET /creatures/:id`









// Start the server
const PORT = process.env.PORT || 3000;
// Export the app. NOTE: Do not start the server with app.listen() here. We will do that in the test file.
export default app;
