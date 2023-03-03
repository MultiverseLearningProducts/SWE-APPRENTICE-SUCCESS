![MV Logo](/logo.jpg)

# Topic
Let's continue with our superhero toy box analogy, and imagine that we want to update the information on one of our superhero action figures to make it more powerful.

To update a superhero in the database, we need to send a PUT request to a specific URL, which includes the ID of the superhero we want to update and the new data we want to use. Here's an example of what that type of request might look like:

```bash
PUT /superheroes/42
Content-Type: application/json

{
  "name": "Superman",
  "superpower": "Super strength, flight, laser vision",
  "age": 35
}
```

In this example, we're updating the superhero with ID 42 to have the name "Superman", the superpowers of super strength, flight, and laser vision, and an age of 35.

To set this up in Express, we can use the `app.put()` method. This method takes two arguments: the URL and a callback function that will be called when a PUT request is made to the URL.

```js
import express from 'express';
// Create a new Express app
const app = express();

// Define the '/superheroes/:id' route to update a superhero
app.put('/superheroes/:id', async (req, res) => {
  const superhero = await Superhero.findByPk(req.params.id);
  if (!superhero) {
    return res.status(404).send('Superhero not found');
  }
  superhero.name = req.body.name;
  superhero.superpower = req.body.superpower;
  superhero.age = req.body.age;
  await superhero.save();
  res.send(superhero);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

We use the `findByPk()` method to find the superhero with the ID specified in the URL. If the superhero doesn't exist, we return a 404 status code and a message. Otherwise, we update the superhero's name, superpower, and age to the values specified in the request body, and then save the superhero to the database.

Writing PUT routes in Express is similar to writing POST routes, but a bit more complex. The main difference is that we use the `app.put()` method instead of the `app.post()` method, and we use the `findByPk()` method to find the superhero we want to update instead of the `create()` method.

## Challenge 🏆
In [../challenge/app.js](../challenge/app.js), complete the `PUT /creatures/:id` endpoint to pass the tests.

## #checkoutTheDocs 🔍
- [Express: app.put()](https://expressjs.com/en/4x/api.html#app.put.method)
