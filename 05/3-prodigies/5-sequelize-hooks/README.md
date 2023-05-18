![MV Logo](/logo.jpg)

# Sequelize Hooks
Sequelize Hooks are a way to run a function before or after a specific action (such as creating, updating, or destroying a model instance). They are a great way to add additional functionality to your Sequelize models and keep your code organized and modular.

Here's an example of using hooks in Sequelize:
```js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Superhero extends Model {}
Superhero.init(
  {
    name: DataTypes.STRING,
    superpower: DataTypes.STRING,
    age: DataTypes.INTEGER
  },
  { sequelize, modelName: "superheroes" }
);

Superhero.beforeCreate((superhero, options) => {
  console.log(`A new superhero named ${superhero.name} is about to be created!`);
});

Superhero.afterCreate((superhero, options) => {
  console.log(`A new superhero named ${superhero.name} has been created!`);
});
```

In this example, we have defined two hooks: a `beforeCreate` hook and an `afterCreate` hook. The `beforeCreate` hook runs before a new instance of the Superhero model is created, and the `afterCreate` hook runs after a new instance is created. In each of these hooks, we have access to the instance that is about to be created/has been created, and can perform any actions we need to.

Sequelize Hooks are a powerful tool for adding custom behavior to your models, and can be used in a variety of different ways. From logging to validating data to sending notifications, there are many uses for hooks in Sequelize.

## #checkoutTheDocs 🔍
- [Sequelize Hooks](https://sequelize.org/docs/v6/other-topics/hooks/)
