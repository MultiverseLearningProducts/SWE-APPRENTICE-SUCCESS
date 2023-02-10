![MV Logo](/logo.jpg)

# Class Static Functions and Properties in JavaScript
In JavaScript, classes can have both instance properties and methods (which can be accessed through an instance of the class) and static properties and methods (which can be accessed directly on the class, without creating an instance).

## Defining Static Properties and Methods
Static properties and methods are defined using the `static` keyword. Notice that the `sayHello` method is an instance method, while the `createPerson` method is a static method.
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello, my name is " + this.name);
  }

  static createPerson(name, age) {
    return new Person(name, age);
  }

  static species = "Homo sapiens";
}

const person = Person.createPerson("John", 30);
person.sayHello(); // Output: "Hello, my name is John"
console.log(Person.species); // Output: "Homo sapiens"
```


In this example, the `createPerson` method is a static method that can be accessed directly on the class, without creating an instance. The `species` property is a static property that can also be accessed directly on the class.

## Use Cases for Static Properties and Methods
Static methods and properties are useful for functionality that is related to the class as a whole, rather than specific instances of the class. They provide a way to organize and structure your code, and make it easier to understand and maintain.

## checkoutTheDocs 🔍
- [MDN: Classes (JavaScript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN: Static methods (JavaScript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

## Video Resources 🎥
- [JavaScript Static Keyword](https://www.youtube.com/watch?v=FF8oF5_9KPM)
- [JavaScript Classes and Object Oriented Programming | Traversy Media](https://www.youtube.com/watch?v=RBLIm5LMrmc)
