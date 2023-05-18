![MV Logo](/logo.jpg)

# Classes
JavaScript classes are a way to create objects that have a blueprint for their properties and methods. They allow you to define objects using a class constructor, which sets the initial values for the object's properties, and methods, which specify the behavior of the object.

Here's a simple code snippet to demonstrate how you might define a class in JavaScript:
  
```js
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }
}

const dog = new Animal('dog', 'bark');
dog.speak(); // Output: bark
```
In this example, we define a class `Animal` with a constructor function that takes two parameters: `name` and `sound`. The constructor sets the `name` and `sound` properties of the object, which can later be accessed using the `this` keyword.

The `Animal` class also has a method `speak`, which simply logs the value of the `sound` property to the console.

To create an instance of the `Animal` class, we use the `new` keyword, followed by the class constructor. This creates a new object with the properties and methods defined in the class.

In this case, we create a new `Animal` object named `dog`, and call the `speak` method on it, which logs the value of `dog.sound` to the console.

JavaScript classes provide a convenient way to organize your code, and can be especially useful when creating multiple objects with similar properties and behaviors.

### #checkoutTheDocs 🔍
- [Classes in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Constructor Keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
- [Class Keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)
- [Class Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

## Video Resources 🎥
- [JavaScript Classes](https://www.youtube.com/watch?v=2ZphE5HcQPQ)
