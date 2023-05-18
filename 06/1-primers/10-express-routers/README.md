![MV Logo](/logo.jpg)

# 🛣️ Express Routers - Superhero Edition 🦸‍♂️

Have you ever watched a superhero movie where the heroes had to navigate through a maze of villains to get to their ultimate goal? Well, think of Express Routers as the maze and your app's endpoints as the ultimate goal.
Let's create an Express Router for our superheroes:

```js
import express from 'express';
import Superhero from './models/superhero';

const superheroRouter = express.Router();

superheroRouter.get('/', async (req, res) => {
  const superheroes = await Superhero.findAll();
  res.json(superheroes);
});

superheroRouter.post('/', async (req, res) => {
  const superhero = await Superhero.create(req.body);
  res.json(superhero);
});

export default superheroRouter;

```

👉 In the above code snippet, we created an Express Router for our superheroes, which contains two endpoints:

- A GET endpoint that returns all the superheroes
- A POST endpoint that allows us to create a new superhero.

Once we've defined our routes, we can mount our router on the main app object using the `app.use()` method:
```js
import express from 'express';
import superheroRouter from './routes/superheroes';

const app = express();

// Mount the superhero routes on the app object
app.use('/superheroes', superheroRouter);
```

## #checkoutTheDocs 🔍
- [Express Routers](https://expressjs.com/en/guide/routing.html#express-router)

## Video Resources 🎥
- [Tutorial on Express Routers](https://www.youtube.com/watch?v=vjf774RKrLc)
