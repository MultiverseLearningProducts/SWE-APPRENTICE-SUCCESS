![MV Logo](/logo.jpg)

# Sequelize Connection and Model Definition
Sequelize is a popular ORM (Object Relational Mapping) library for Node.js that allows you to interact with a database using JavaScript. It provides a simple and efficient way to define and manage database schemas and execute CRUD (Create, Read, Update, Delete) operations.

## Installation
To start using Sequelize, we first need to install it using npm:
```bash
npm install sequelize
```

## Connecting to a Database
Next, we need to establish a database connection. Here's an example of how to connect to a SQLite database using Sequelize:
```js
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite'),
    logging: false
});

sequelize.sync();
console.log('Connection has been established successfully.');
```

## Defining Models
Once the connection has been established, you can define your database models using the `define` method:

```js
const Superhero = sequelize.define('superhero', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  superpower: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

```
In this example, a `Superhero` model is defined with three fields: `name`, `superpower`, and `age`. Each field has a specific data `type` and `allowNull` property specified.

We can then use the defined `Superhero` model to perform CRUD operations on the database, such as creating, reading, updating, and deleting superhero records.

## #checkoutTheDocs 🔍
- [Sequelize - Getting Started](https://sequelize.org/master/manual/getting-started.html)
- [Sequelize - Model Definition](https://sequelize.org/master/manual/model-basics.html)

## Video Resources 🎥
- [Sequelize: Getting Started](https://www.youtube.com/watch?v=6NKNfXtKk0c)
- [Sequelize: Defining Models](https://www.youtube.com/watch?v=8W_dd3uA1Iw)
