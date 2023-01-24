![MV Logo](../../../logo.jpg)

# Type Coercion
Suppose we had the following expression:

```javascript
let exp = 5 + "9";
console.log(exp)
```

Despite the first 5 being a number and the second "9" being a string, the output to our console would be:
```shell
59
```

JavaScript *coerced* the 5 from a number into a string and then joined the two together. This is known as **type coercion** which is the automatic or implicit conversion of values from one data type to another. Type coercion will implicitly convert an expression into one of the following primitive data types:
- String
- Number
- Boolean

## Implicit vs. Explicit Coercion

The example above is ***implicit*** type coercion because JavaScript automatically converts the data type. Some other examples of implicit type coercion are shown below:

```javascript
let example1 = "Hello" + 100; // Hello100
let example2 = "True" + true; // Truetrue
let example3 = true + true; // 2
let example4 = false + false; // 0
let example5 = 12 == "12"; // true
```

When a developer intentionally converts from one type to another, this is known as ***explicit*** type coercion (often called type casting). Explicit type coercion can be accomplished using the following methods:
- **`String()`** - Convert value to a string
- **`Number()`** - Convert value to a Number
- **`Boolean()`** - Convert value to a Boolean

Ane example of these would look like:
```javascript
let explicit1 = String(123) // explicit conversion to the string "123"
let explicit2 = Number("123") // explicit conversion to the number 123
let explicit3 = Boolean("123") // explicit conversion to the boolean true
```

## #checkoutTheDocs 🔍
- **MDN**: [Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
- **Free Code Camp**: [Type Coercion Explained](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)

## Video Resources 🎥
- [Type Conversions and Coercion in JavaScript](https://www.youtube.com/watch?v=wFiVtqe1osM)