![MV Logo](/logo.jpg)

# Application Servers with Databases (Sequelize)
It's great to have a server, and it's great to have a database, but what if we want to combine the two? We can use Sequelize to create a server that can interact with a database!

For example, say we want to serve up all Superheroes from our `Superhero` Sequelize model.

```js
import express from 'express';
// import Superhero model (note: We haven't defined the model, just the server for this code snippet)
import Superhero from './models/superhero';
// create the app
const app = express();

// Endpoint for fetching all superheroes
app.get('/', async (req, res) => {
  // use try/catch to handle errors
  try {
    // find all superheroes
    const superheroes = await Superhero.findAll();
    // send back the superheroes as a JSON response
    res.json(superheroes);
  } catch (err) {
    // if there's an error, send back a 500 status code and the error message
    res.status(500).json({ error: err.message });
  }
});
```

## Challenge 🏆
In [../challenge/app.js](../challenge/app.js), complete the `GET /creatures` endpoint to pass the tests.

## #checkoutTheDocs 🔍
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)

## Video Resources 🎥
- [GET all in Express](https://youtu.be/Crk_5Xy8GMA?t=937)
