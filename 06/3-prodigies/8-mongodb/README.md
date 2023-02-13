![MV Logo](/logo.jpg)

# MongoDB and Mongoose
Mongoose is a popular Object Document Mapping (ODM) library for MongoDB and Node.js. It provides a convenient way to interact with MongoDB collections and perform various database operations, including querying data.

Here's a simple example to get started with querying data using Mongoose and the Superhero and Villain models:
```js
const mongoose = require('mongoose');

// Connect to a MongoDB database
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define the Superhero and Villain models
const Superhero = mongoose.model('Superhero', {
  name: String,
  superpower: String,
  age: Number
});

const Villain = mongoose.model('Villain', {
  name: String,
  evilPlan: String,
  age: Number
});

// Find all Superheroes with a specific name
Superhero.find({ name: 'Superman' }, (error, superheroes) => {
  if (error) {
    console.error(error);
  } else {
    console.log(superheroes);
  }
});

// Find a single Villain with a specific evil plan
Villain.findOne({ evilPlan: 'Take over the world' }, (error, villain) => {
  if (error) {
    console.error(error);
  } else {
    console.log(villain);
  }
});
```

In this example, we use the `mongoose.connect` method to connect to a MongoDB database and the `mongoose.model` method to define our Superhero and Villain models. The `find` method is used to find all Superheroes with a specific name and the `findOne` method is used to find a single Villain with a specific evil plan. Note that both of these methods return a query that you can further chain with other query methods (such as sorting and limiting results) before actually executing the query with the `exec` method.

## #checkoutTheDocs 🔍
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)

## Video Resources 🎥
- [MongoDB in 18 Minutes - Intro to MongoDB](https://www.youtube.com/watch?v=bKjH8WhSu_E)
