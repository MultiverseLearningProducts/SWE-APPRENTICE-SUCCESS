![MV Logo](/logo.jpg)
# Filtering and Sorting in Express and Sequelize
Have you ever tried to find all the Superheroes that are over 30 years old or sort them by their superpower? In this lesson, we'll teach you how to filter and sort data using Express and Sequelize.
## Filtering
To filter data in Express, you can use query parameters to pass the values you want to filter on. For example, let's say we want to get all the Superheroes who are over 30 years old:

```js
import express from 'express';
import { Op } from 'sequelize';
import Superhero from '../models/Superhero';

const app = express();

app.get('/superheroes', async (req, res) => {
  const superheroes = await Superhero.findAll({
    where: {
      age: {
        [Op.gt]: 30,
      },
    },
  });
  res.json(superheroes);
});

```

In this example, we're using the `findAll` method of Sequelize to retrieve all the Superheroes that are over 30 years old. We use the `where` option to specify the filter criteria. The `[Op.gt]` key represents the greater than operator, and it's used to compare the `age` property with the value `30`.
### Sorting
To sort data in Express, you can use the `order` option of the `findAll` method in Sequelize. For example, let's say we want to sort our Superheroes by their superpower in descending order:

```js
import express from 'express';
import Superhero from '../models/Superhero';

const app = express();

app.get('/superheroes', async (req, res) => {
  const superheroes = await Superhero.findAll({
    order: [['superpower', 'DESC']],
  });
  res.json(superheroes);
});

```

In this example, we're using the `order` option to sort the Superheroes by their `superpower` in descending order. The `DESC` value stands for descending, and it's used to sort the results in reverse order.

That's it! With these two techniques, you can easily filter and sort your data in Express and Sequelize.
## #checkoutTheDocs 🔍
- [Sequelize Operators](https://sequelize.org/master/manual/model-querying-basics.html#operators)
- [Sequelize Querying - Filtering](https://sequelize.org/v5/manual/querying.html#where)
- [Sequelize Querying - Ordering](https://sequelize.org/v5/manual/querying.html#ordering)
