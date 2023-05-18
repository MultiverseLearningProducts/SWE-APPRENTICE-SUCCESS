![MV Logo](/logo.jpg)

# Understanding the `this` Context in Classes and Class Methods in JavaScript
The `this` keyword in JavaScript refers to the object that the current function is a method of. In classes and class methods, `this` can be used to access properties and methods of the class instance. However, it's important to understand the context in which `this` is evaluated, as it can behave differently than expected.


## The Default `this` Context
In a class constructor or method, `this` refers to the instance of the class by default. For example:
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
In this example, the `sayHello` method accesses the `name` property of the `Person` instance using `this`.

The `this` Context in Arrow Functions
In an arrow function, `this` refers to the surrounding context, rather than the instance of the class. This can lead to unexpected behavior if you're trying to access class instance properties within an arrow function:
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello = () => {
    console.log("Hello, my name is " + this.name);
  }
}

const person = new Person("John", 30);
person.sayHello(); // Output: "Hello, my name is John"
```
In this example, the `sayHello` method is defined as an arrow function, so `this` refers to the surrounding context (in this case, the window object) instead of the `Person` instance. To avoid this, you can use a regular function instead of an arrow function.

## #checkoutTheDocs 🔍
- [MDN: This](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [JavaScript.info - this](https://javascript.info/object-methods#this)

## Video Resources 🎥

- [Javascript `this` keyword](https://www.youtube.com/watch?v=gvicrj31JOM)
