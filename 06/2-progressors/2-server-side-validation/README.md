![MV Logo](/logo.jpg)

# Superhero Validation with Express, Joi, and Sequelize
In the world of superheroes, it's important to make sure that their powers are used for good and not evil. Similarly, in our web applications, we need to validate user input to ensure that it's correct and secure.

To do this, we'll use three different approaches: `express-validator`, `joi`, and Sequelize validations.
## 1. Using `express-validator`
`express-validator` is a middleware for Express that provides a flexible and powerful way to validate user input:

```js
// Importing Express and express-validator
import express from "express";
import { body, validationResult } from "express-validator";

// Defining the route for creating a new superhero
const app = express();
app.post(
  "/superheroes",
  body("name").notEmpty(),
  body("superpower").notEmpty(),
  body("age").isInt({ min: 0, max: 100 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create a new superhero
    // ...
    res.send("Superhero created!");
  }
);

```

In this example, we defined a route for creating a new superhero. We used `body` to define the validation rules for each field, and `validationResult` to check if there are any errors. If there are errors, we return a 400 status code and an array of error messages.

## 2. Using `joi`
`joi` is a powerful schema description language and data validator for JavaScript. Here's an example of how to use it:

```js
// Importing Joi
import Joi from "joi";

// Defining the schema for a superhero
const superheroSchema = Joi.object({
  name: Joi.string().required(),
  superpower: Joi.string().required(),
  age: Joi.number().integer().min(0).max(100).required(),
});

// Validating a superhero
const result = superheroSchema.validate(req.body);
if (result.error) {
  return res.status(400).json({ error: result.error.details[0].message });
}

// Create a new superhero
// ...
res.send("Superhero created!");

```

In this example, we defined a schema for a superhero using `Joi.object`. We defined the validation rules for each field using `Joi.string`, `Joi.number`, and other validation functions. We then validated the request body using the `validate` method, and returned a 400 status code and an error message if there are any errors.

## 3. Using Sequelize Validations
Sequelize has a built-in validation system that allows us to define validation rules for our models. Here's an example of how to use it:

```js
// Defining the model for a superhero
const Superhero = sequelize.define("superhero", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  superpower: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1,
      max: 100,
    },
  },
});

```
Now, if we try to save a superhero with invalid data, Sequelize will throw an error and the superhero will not be saved to the database.

Any one of these approaches can be used to validate user input. However, it's important to note that they are not mutually exclusive. For example, we can use `express-validator` to validate the request body, and then use Sequelize validations to validate the data before saving it to the database.

## Note About Challenges 🏆
In [../challenge/app.js](../challenge/app.js), complete the `POST /guests` endpoint to pass the tests for Server Side Validation.
## #checkoutTheDocs 🔍
- [express-validator documentation](https://express-validator.github.io/docs/)
- [joi documentation](https://joi.dev/api/)
- [Sequelize validations](https://sequelize.org/v5/manual/models-definition.html#validations)

## Video Resources 🎥
- [Node.js Express Validation with express-validator](https://youtu.be/z8m_Vy_9FIs?t=791)
- [Form Validation in Node.js with Express and Joi](https://youtu.be/_svzevhv4vg?t=50)
- [Sequelize Validations](https://youtu.be/Z1O9iddzcXk?t=360)
