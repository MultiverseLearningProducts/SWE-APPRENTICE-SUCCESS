# IIFEs (Immediately Invoked Function Expressions)

- Function expressions are often used as arguments to other functions, or as IIFEs (Immediately Invoked Function Expressions) which run as soon as they are defined.

For example:
  ```js
  (function() {
    console.log('IIFE');
  })(); // IIFE
  ```
Notice that the function is wrapped in parentheses, and then immediately invoked with the `()` at the end. The parens around the function force the code between them to be evaluated as an expression, rather than a statement.  The second, empty, parens at the end invoke the function.

It's important to note that the variables declared within the IIFE will not be accessible outside of the function. For example:
  ```js
  const result = (function() {
    let name = 'Lydia';
    return name;
  })();
  console.log(name); // ReferenceError: name is not defined
  ```

However, we can manipulate variables that were declared outside of the function.
  
    ```js
    let name = 'Lydia';
    console.log(name); // Lydia
    (function() {
      name = 'Sarah';
      console.log(name);
    })(); // Sarah
    console.log(name); // Sarah
    ```

## checkoutTheDocs 🔍
- [MDN: IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

## Video Resources 🎥
- [What is an IIFE?](https://www.youtube.com/watch?v=8GDk8sj0YgQ)
