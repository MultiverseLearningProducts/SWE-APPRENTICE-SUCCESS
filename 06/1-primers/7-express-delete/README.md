![MV Logo](/logo.jpg)

# DELETE Routes in Express
Sometimes our Superheroes are eliminated 😵 by their arch-nemesis, 🦹 and we need to remove them from our database. We can use a DELETE route to do this.

To delete a superhero from the database, we need to send a DELETE request to a specific URL, which includes the ID of the superhero we want to delete. For example, a call like `DELETE /superheroes/42` would delete the superhero with ID 42 from the database.

To set this up in Express, we can use the `app.delete()` method. This method takes two arguments: the URL and a callback function that will be called when a DELETE request is made to the URL.

```js
import express from 'express';
// Create a new Express app
const app = express();

// Define the '/superheroes/:id' route to delete a superhero
app.delete('/superheroes/:id', async (req, res) => {
  const superhero = await Superhero.findByPk(req.params.id);
  if (!superhero) {
    return res.status(404).send('Superhero not found');
  }
  await superhero.destroy();
  res.send('Superhero deleted');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

We use the `findByPk()` method to find the superhero with the ID specified in the URL. If the superhero doesn't exist, we return a 404 status code and a message. Otherwise, we call the `destroy()` method on the superhero to delete it from the database.

## Challenge 🏆
In [../challenge/app.js](../challenge/app.js), complete the `DELETE /creatures/:id` endpoint to pass the tests.
## #checkoutTheDocs 🔍
- [Express: app.delete()](https://expressjs.com/en/4x/api.html#app.delete.method)
