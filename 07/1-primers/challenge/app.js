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






/*
Do you have a mythical creature that you've been dying to add to our database? Look no further than this route! With just a simple POST request, you can add a brand new creature to our collection. Who knows, it might become the next big thing!
Create a POST endpoint at /creatures that creates a new creature in the database and returns a JSON response with the creature that was just created.
*/
// 👇👇👇 YOUR CODE for `POST /creatures`








/*
After a long and treacherous journey, you have finally arrived at the cave of the ferocious dragon Smaug. You have one chance to defeat him and take his treasure. Luckily, you don't have to defeat him to get his treasure - you can just delete him from your database! 
Create a DELETE endpoint at /creatures/:id that deletes a creature from the database with the specified ID and returns a success message as a JSON response.
*/
// 👇👇👇 YOUR CODE for `DELETE /creatures/:id`






/*
Have you discovered an error in one of our creatures' descriptions? Or maybe you've spotted a dragon with a new shade of scales? With this route, you can update any creature in our database with ease! Just send a PUT request with the updated information and let us take care of the rest.
Create a PUT endpoint at /creatures/:id that updates a creature in the database and returns a JSON response with the updated creature.
*/
// 👇👇👇 YOUR CODE for `PUT /creatures/:id`










// Start the server
const PORT = process.env.PORT || 3000;
// Export the app. NOTE: Do not start the server with app.listen() here. We will do that in the test file.
export default app;
