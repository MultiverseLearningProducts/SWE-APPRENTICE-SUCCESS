![MV Logo](/logo.jpg)

# Polymorphism
Polymorphism is a concept in object-oriented programming that allows objects of different classes to be treated as objects of a common class. In the context of JavaScript classes, polymorphism refers to the ability of objects of different classes to respond to the same method call in their own unique way.

For example, consider two classes `Rectangle` and `Triangle` which both have a method `area()` that calculates the area of the shape. While the formula to calculate the area is different for both shapes, the method name is the same. This allows the objects of both classes to be treated as objects of a common class, and to respond to the same method call.

```js
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  area() {
    return (this.base * this.height) / 2;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.area()); // 50

const triangle = new Triangle(5, 10);
console.log(triangle.area()); // 25
```
In this example, both `Rectangle` and `Triangle` classes have a method `area()` but the implementation is different for each class. The polymorphism allows the objects of both classes to be treated as objects of a common class, and to respond to the same method call in their own unique way.

## #checkoutTheDocs 🔍
- [MDN: Polymorphism](https://developer.mozilla.org/en-US/docs/Glossary/Polymorphism)

## Video Resources 🎥
- [Polymorphism in JavaScript](https://www.youtube.com/watch?v=8a5BkwuZRK0)
