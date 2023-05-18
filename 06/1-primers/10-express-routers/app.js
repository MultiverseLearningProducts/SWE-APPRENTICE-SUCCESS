import express from 'express';
const app = express();

// in memory "database"
import creatures from './db.js';

/* 
Our mythical creatures website has grown in popularity and we're now getting requests to add more routes to our application. We've decided to use Express routers to organize our code.

Create a new Express router for handling all routes related to creatures. Move all the below routes to the new router and mount it at /creatures.

STEP 1: Cut the below routes
STEP 2: Create the router in creaturesRouter.js and paste these routes into the file
STEP 3: Import the router into this file.
STEP 4: Mount the router in this file, mounted at /creatures.
*/

// 👇👇👇 STEP 1: Cut and move these routes to creaturesRouter.js 👇👇👇

// GET 
app.get('/', (req, res) => {
  res.json(creatures);
});

// GET /:name
app.get('/:name', (req, res) => {
  const { name } = req.params;
  const creature = creatures.find((creature) => creature.name === name);
  if (!creature) {
    res.status(404).json({ message: `Creature with name ${name} not found` });
  } else {
    res.json(creature);
  }
});

// DELETE /:name
app.delete('/:name', (req, res) => {
  const { name } = req.params;
  const creatureIndex = creatures.findIndex(
    (creature) => creature.name === name
  );
  if (creatureIndex === -1) {
    res.status(404).json({ message: `Creature with name ${name} not found` });
  } else {
    creatures.splice(creatureIndex, 1);
    res.status(204).end();
  }
});

// 👇👇👇 STEP 3: YOUR CODE for importing `/creatures` router 👇👇👇

// 👇👇👇 STEP 4: YOUR CODE for mounting `/creatures` router 👇👇👇

export default app;