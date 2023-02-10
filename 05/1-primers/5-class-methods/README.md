![MV Logo](/logo.jpg)

# Class Methods
In JavaScript, classes can have both instance methods and static methods. Instance methods are methods that are attached to an instance of a class and can access the instance data using the `this` keyword. Static methods, on the other hand, are methods that are attached to the _class itself_ and do _not_ have access to instance data.

```js
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance Method
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  // Static Method
  static calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
}

const circle = new Circle(5);
console.log(circle.calculateArea()); // 78.53981633974483

console.log(Circle.calculateCircumference(5)); // 31.42...

```

Instance methods are called on an instance of a class and have access to the instance data. In the example above, the `calculateArea` method calculates the area of a circle using the instance's radius.

Static methods, on the other hand, are called on the class itself and do not have access to instance data. The `calculateCircumference` method calculates the circumference of a circle using the given radius. To call a static method, you need to use the class name followed by the method name, without creating an instance of the class.

### #checkoutTheDocs 🔍
- [MDN: Static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

## Video Resources 🎥
- [JavaScript Classes - Static Methods](https://www.youtube.com/watch?v=Jbopfp3LvRU)
