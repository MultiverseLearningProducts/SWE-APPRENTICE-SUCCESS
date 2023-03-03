![MV Logo](/logo.jpg)

# Sequelize Class Methods
In Sequelize, you can create custom class methods by defining a method on the model's class. These methods can be used to encapsulate logic that is commonly used with the model and can be called on any instance of the model.

Here's an example of creating a custom class method that calculates the average age of all superheroes:
```js
Superhero.averageAge = function() {
  return this.sum('age')
    .then(sum => this.count().then(count => sum / count));
};
```
In this example, we define a custom class method `averageAge` on the `Superhero` model class. This method calculates the average age of all superheroes by first finding the sum of the ages and then dividing it by the number of superheroes.

We can then call this method on the `Superhero` model class:
```js
Superhero.averageAge().then(averageAge => {
  console.log(`The average age of all superheroes is ${averageAge}`);
});
```

## Note About Challenges 🏆
You'll notice there are two challenges in the file. They are in the same file since the test suite needs to be run together. The first challenge is for class methods (this topic), and the second challenge is for instance methods (the next topic). **_Move on to the instance methods lesson_ before completing the second challenge**.
