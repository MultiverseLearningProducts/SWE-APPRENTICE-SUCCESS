# Function Expressions

- Primitives are not the only thing that can be assigned to a variable: Functions are a value, too!
- A function expression is a function that is assigned to a variable.

For example, the function declaration we've learned...
  ```js
  function add(a, b) {
    return a + b;
  }
  add(1, 2); // 3
  ```

... can also be written as a function expression:
  ```js
  const add = function(a, b) {
    return a + b;
  };
  add(1, 2); // 3
  ```
Notice that the only difference here is that we "assign a value" to `add`. It's just, the value is a function!

## checkoutTheDocs 🔍
- [MDN: Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Function_expressions)

## Video Resources 🎥
- [Function Declarations VS Function Expressions in JavaScript](https://www.youtube.com/watch?v=gjLn95skIKE)
