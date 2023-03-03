![MV Logo](/logo.jpg)

# POST Routes in Express
Have you ever tried to submit a form on a website and got an error message saying "Error: 405 Method Not Allowed"? That's because the website probably didn't have a `POST` route set up to handle your form submission. Let's add this functionality now. With the power of `POST`, we'll be able to add new superheroes to our database and have them join the fight against evil!

To add a `POST` route in Express, we use the `app.post()` method. 

```js
import express from 'express';
// Create a new Express app
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Define the '/superheroes' route to create a new superhero
app.post('/superheroes', async (req, res) => {
  const { name, superpower, age } = req.body;
  const superhero = await Superhero.create({ name, superpower, age });
  res.json(superhero);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```
Here, we've defined a `POST /superheroes` route, which expects a JSON payload in the request body with the name, superpower, and age of the new superhero. The route handler uses the create method of the `Superhero` model to create a new superhero in the database, and returns the new superhero as JSON in the response.

Now, we can send a `POST` request to the `/superheroes` route with a JSON payload containing the name, superpower, and age of a new superhero, and the route handler will create a new superhero in the database and return it as JSON in the response.

## Challenge 🏆
In [../challenge/app.js](../challenge/app.js), complete the `POST /creatures` endpoint to pass the tests.
## #checkoutTheDocs 🔍
- [Express app.post() method](http://expressjs.com/en/5x/api.html#app.post.method)
