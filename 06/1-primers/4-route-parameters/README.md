![MV Logo](/logo.jpg)

# Express Route Parameters
Route parameters allow us to define dynamic routes that can accept different values as parameters. 

For example, we can create a route that accepts a superhero's ID as a parameter: `/superheroes/:id`. When a user makes a request to this URL with a specific ID, our server can retrieve the corresponding superhero from the database and return it as a response.

```js
import express from 'express';
// import Superhero model (note: We haven't defined the model, just the server for this code snippet)
import Superhero from './models/superhero';
// create the app
const app = express();

// Parse JSON bodies. See below for more details on JSON parsing
app.use(express.json());

// Define the '/superheroes' route to return all superheroes
app.get('/superheroes', async (req, res) => {
  const superheroes = await Superhero.findAll();
  res.json({ superheroes });
});

// Define the '/superheroes/:id' route to return a specific superhero
app.get('/superheroes/:id', async (req, res) => {
  const superhero = await Superhero.findByPk(req.params.id);
  if (superhero) {
    res.json({ superhero });
  } else {
    res.status(404).send('Superhero not found');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Superhero server listening on port 3000!');
});
```

We use the req.params object to access the ID parameter from the URL. This object contains all of the parameters defined in the URL, with the parameter names as the keys and the parameter values as the values.

## 💡 JSON Parsing Middleware
In the code snippet above, we use the `express.json()` middleware to parse JSON bodies. This middleware is included in Express by default, so we don't need to install it separately.  🚨**Important:** If we don't use this middleware, we _won't be able to access the request body in our routes_.  The `express.json()` middleware must go before any routes that need to access the request body. This is one of the most common mistakes when using Express, and can cause a lot of confusion.  _If you're having trouble accessing the request body, make sure you're using the `express.json()` middleware._

## Challenge 🏆
In [../challenge/app.js](../challenge/app.js), complete the `GET /creatures/:id` endpoint to pass the tests.

## #checkoutTheDocs 🔍
- [Express Route Parameters](https://expressjs.com/en/guide/routing.html#route-parameters)

## Video Resources 🎥
- [Express Route Parameters](https://www.youtube.com/watch?v=MuMs1pLuT7I)
