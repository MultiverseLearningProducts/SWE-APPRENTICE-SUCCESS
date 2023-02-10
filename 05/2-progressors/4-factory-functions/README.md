![MV Logo](/logo.jpg)

# Factory Functions and Constructor Functions
JavaScript classes are a convenient syntax for creating objects with similar behavior. However, they are just a convenient syntax that is built on top of two fundamental concepts in JavaScript: factory functions and constructor functions.

## Factory Functions
A factory function is a function that returns an object. The object can have properties and methods defined directly on it.

```js
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    sayHello: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
}

const person = createPerson("John", 30);
person.sayHello(); // Output: "Hello, my name is John"
```

## Constructor Functions
A constructor function is a function that is used to create an object with a specific type. As with class syntax, the `new` keyword is used to create an instance of the object, and the instance inherits the properties and methods of the constructor function.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log("Hello, my name is " + this.name);
  };
}

const person = new Person("John", 30);
person.sayHello(); // Output: "Hello, my name is John"
```

As you can see, factory functions and constructor functions can be used to create objects with similar behavior, but they have different syntax and approaches to defining properties and methods on the objects they create.

## Class Syntax Equivalent
The equivalent of the above two examples using class syntax would be:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello, my name is " + this.name);
  }
}

const person = new Person("John", 30);
person.sayHello(); // Output: "Hello, my name is John"
```

## #checkoutTheDocs 🔍
- [Tutorial: Factory Functions](https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern)
- [Tutorial: Constructor Functions](https://rollbar.com/blog/javascript-constructors)

## Video Resources 🎥
- [Factory Functions](https://www.youtube.com/watch?v=ImwrezYhw4w)
