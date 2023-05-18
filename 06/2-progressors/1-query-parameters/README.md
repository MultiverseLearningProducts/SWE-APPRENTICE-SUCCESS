![MV Logo](/logo.jpg)

# Express Query Parameters
Have you ever needed a superhero's 🦸‍♂️ power to fight a difficult problem? Well, with Express Query Parameters, you can become a superhero and defeat the enemies of your application!

Express Query Parameters are a way to provide additional information to the server through the URL. Think of them as parameters that modify or filter the server's response to an HTTP request.

Let's use query parameters to retrieve a list of superheroes by age.

```js
// Importing Express
import express from "express";

// Creating the Express app
const app = express();

// Setting up a route to get superheroes by age using query parameters
app.get("/superheroes", async (req, res) => {
  const { age } = req.query;
  const superheroes = await Superhero.findAll({
    where: { age },
  });
  res.json(superheroes);
});

// Starting the server
app.listen(3000, () => {
  console.log("Server started");
});

```

In this example, we create an Express route that retrieves superheroes from the database based on the age query parameter. When the route is hit, Express extracts the `age` parameter from the URL, and then uses it to filter the superheroes returned by Sequelize. Finally, the filtered superheroes are returned in JSON format.

And that's it! With Express Query Parameters, you can now filter and modify the server's response to an HTTP request, just like a superhero would. 🦸‍♀️

## Note About Challenges 🏆
In [../challenge/app.js](../challenge/app.js), complete the `GET /guests` endpoint to pass the tests for Query Parameters.

## #checkoutTheDocs 🔍
- [Express Query Parameters](https://expressjs.com/en/api.html#req.query)

## Video Resources 🎥
- [Express Query Parameters - Web Dev Simplified](https://www.youtube.com/watch?v=SWZ_4YBFBhs)
- [Sequelize - Traversy Media](https://www.youtube.com/watch?v=pxJy5w1y4Eg)
