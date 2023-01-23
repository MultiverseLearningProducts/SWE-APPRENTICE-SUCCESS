# Arrow Functions

- Arrow functions are a different (newer) way to write functions in JavaScript.
- Also known as "fat arrow" functions or "arrow function expressions".

While a function declaration is written like this...
  ```js
  function name(param1, param2, …, paramN) {
    /* statements */
  }
  ```
...the syntax of an arrow function is:
  ```js
  (param1, param2, …, paramN) => { /* statements */ }
  ```
- The arrow function expression is a shorter syntax for writing a function expression.

For example:
  ```js
  const add = (a, b) => {
    return a + b;
  };
  add(1, 2); // 3
  ```
- One of the most helpful parts of an arrow function is that it automatically returns the value of the expression if it is a single line of code. For example, the above function can also be written as:
  ```js
  const add = (a, b) => a + b;
  add(1, 2); // 3
  ```
Another example:
  ```js
  const double = number => number * 2;
  double(2); // 4
  ```
- Arrow functions are especially helpful when used with `map`, `filter`, and `reduce` methods (more on these next week).
- **⚠️ Caution:** Arrow functions do not have their own `this` value.  Instead, they use the `this` value of the enclosing context.  `this` is a topic we will cover in a later week.

## checkoutTheDocs 🔍
- [MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Video Resources 🎥
- [Arrow Functions](https://www.youtube.com/watch?v=22fyYvxz-do)
