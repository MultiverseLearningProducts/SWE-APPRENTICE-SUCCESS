![MV Logo](/logo.jpg)

# Sequelize Instance Methods
Unlike class methods, instance methods are defined on the model's prototype. This means that they can only be called on instances of the model. Here's an example of creating a custom instance method that calculates the age of a superhero in dog years:

```js
Superhero.prototype.dogYears = function() {
  return this.age * 7;
};
```

In this example, we define a custom instance method `dogYears` on the `Superhero` model's prototype. This method calculates the age of a superhero in dog years by multiplying the superhero's age by 7.

We can then call this method on an instance of the `Superhero` model:

```js
const batman = Superhero.create({
  name: 'Batman',
  superpower: 'Intelligence',
  age: 40
});
console.log(`Batman is ${batman.dogYears()} in dog years`); // Batman is 280 in dog years
```
