![MV Logo](/logo.jpg)

# Pagination with Superheroes 🦸‍♂️
Superheroes are known for their superhuman abilities, but even they can't handle a never-ending list of data. 😱 When we have a large dataset, it's important to implement pagination to ensure that our application remains fast and responsive. With pagination, we can divide our data into smaller, more manageable chunks and display them one page at a time.

To demonstrate this, let's create a paginated list of superheroes.

```js
// Importing Express and Sequelize
import express from "express";
import { Op } from "sequelize";
import { Superhero } from "./models";

// Defining the route for our paginated list
const app = express();
app.get("/superheroes", async (req, res) => {
  // Getting the page number and page size from the query parameters
  const { page = 1, pageSize = 10 } = req.query;

  // Calculating the offset and limit for Sequelize
  const offset = (page - 1) * pageSize;
  const limit = pageSize;

  // Querying the superheroes with Sequelize and applying pagination
  const { count, rows: superheroes } = await Superhero.findAndCountAll({
    offset,
    limit,
    where: {
      name: {
        [Op.like]: `%${req.query.name}%`,
      },
      superpower: {
        [Op.like]: `%${req.query.superpower}%`,
      },
      age: {
        [Op.between]: [req.query.minAge, req.query.maxAge],
      },
    },
  });

  // Sending the paginated superheroes to the client
  res.send({
    page,
    pageSize,
    totalPages: Math.ceil(count / pageSize),
    count,
    superheroes,
  });
});

```

In this example, we defined a route for our paginated list of superheroes. The `page` and `pageSize` parameters are used to calculate the `offset` and `limit` for Sequelize, and the `where` clause is used to filter the superheroes based on the query parameters.

The `findAndCountAll` method returns both the paginated superheroes and the total count of superheroes. We then send the paginated superheroes, along with some metadata like `totalPages` and `count`, to the client.

With pagination, we can make our application more performant and easier to use for our users. So let's get started and create our own paginated list of superheroes! 🦸‍♀️

## #checkoutTheDocs 🔍
- [Sequelize Pagination](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#limits-and-pagination)

## Video Resources 🎥
- [Paginated API with Node.js](https://youtu.be/ZX3qt0UWifc?t=273)
