![MV Logo](/logo.jpg)

# Node Modules

Node modules are a fundamental concept in Node.js, representing a collection of JavaScript files that can be reused across multiple projects. They provide a way to encapsulate and share functionality, making it easier to build, maintain and reuse code.

For example, we could define a function in one file and use it in another file in a Node.js project:

File: `math.js`:

```js
exports.add = function(a, b) {
  return a + b;
};
```

File: `index.js`:

```js
const math = require('./math.js');

console.log(math.add(1, 2)); // Output: 3
```
In this example, we have two separate files `math.js` and `index.js`. The `math.js` file defines a single function `add` that takes two parameters `a` and `b`, and returns their sum.

In the `index.js` file, we use the require function to import the contents of the `math.js` file. This gives us access to the `add` function, which we can then use to perform a calculation and print the result.

In this way, we can structure your code into reusable, modular components that can be combined in different ways to build complex applications.

### #checkoutTheDocs 🔍
- [Node.js Modules](https://nodejs.org/api/modules.html#modules-commonjs-modules)
- [Node.js Modules Tutorial](https://www.tutorialsteacher.com/nodejs/nodejs-modules)

## Video Resources 🎥
- [Node.js Tutorial for Beginners: Learn Node in 1 Hour](https://www.youtube.com/watch?v=TlB_eWDSMt4)
