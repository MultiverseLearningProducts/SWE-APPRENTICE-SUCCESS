![MV Logo](/logo.jpg)
# Debugging: Types of Errors:

- Debugging is the process of finding and fixing errors in a program.
- There are several types of errors that can occur in a program:
  - Reference errors: occur when a variable is not declared or is out of scope.
  - Syntax errors: occur when the program is not written according to the correct syntax of the programming language.
  - Type errors: occur when the program is written correctly but the data type of a variable is not what is expected.

- Common debugging tools and techniques include: using `console.log()` to print out variable values and check logic, using the browser developer tools, and using a linter to check for syntax errors.
- To find your bug, it's best to use a methodical approach and do a stack trace to find the source of the error. 
- Sometimes, we just encounter unexpected results.

For example:
  
```js
function add(a, b) {
  return a + b;
}
console.log(add(1, 2)); // 3
console.log(add("1", "2")); // 12
console.log(add("1", 2)); // 12
```
Why does this function give different output with seemingly identical arguments?

In order to get to the bottom of this issue, we can add a `console.log` statement to the function and then call the function with different arguments.  We can combine it with the typeof operator to figure out whats wrong.

```js
function add(a, b) {
  console.log(typeof a, typeof b);
  return a + b;
}
```

## checkoutTheDocs 🔍
- [MDN: Reference errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined)
- [MDN: Syntax errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Syntax)
- [MDN: Type errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function)

## Video Resources 🎥
- [Errors in JavaScript](https://www.youtube.com/watch?v=O0EHKBi7iXU)
- [How to read a stack trace in VS Code](https://www.youtube.com/watch?v=9AZReNXoC1E)
