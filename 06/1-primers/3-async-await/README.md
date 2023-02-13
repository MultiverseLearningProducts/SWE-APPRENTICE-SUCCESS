![MV Logo](/logo.jpg)

# Async/Await
Async/await is a more modern and concise way to handle asynchronous code in JavaScript compared to traditional callbacks and promises. It makes the code easier to read and understand.

An `async` function is a function declared with the `async` keyword, which means that it returns a promise (_see below for explanation on promises_) and can be `await`-ed. The `await` keyword is used to wait for a promise to be resolved before moving on to the next line of code.

```js
async function getData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

getData().then(data => {
  console.log(data);
});
```
In this example, the `getData` function uses the `fetch` API to retrieve data from a remote API. The `await` keyword is used to wait for the response from the API before parsing it as JSON and returning it.

The returned promise from the `getData` function is then handled using the .then method, where the resolved data is logged to the console.

It's important to note that the code within an `async` function will run asynchronously, just like with promises. However, the use of `await` makes the code look like it's running synchronously, which can make the code easier to understand and debug.

Not only is async/await is a great way to handle asynchronous code in JavaScript; it can make your code more readable and maintainable.

## Limitations
Note that await can only be used inside of an `async` function. If you try to use it outside of an `async` function, you'll get a syntax error. The exception to this rule is with ESM modules, where you can use "top-level" `await` outside of an `async` function.

## What's a Promise?
A promise in JavaScript is an object that represents the eventual outcome of an asynchronous operation. A promise can be in one of three states: pending, resolved, or rejected.

Think of a promise as a person's promise to do something for you. When that person first makes the promise, it is "pending", meaning that you don't yet know if they will fulfill it or not. If the promise is fulfilled, it is resolved, and if it is not fulfilled, it is rejected.

## #checkoutTheDocs 🔍
- [MDN - Async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN - await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [MDN - ESM Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

## Video Resources 🎥
- [JavaScript Async Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU)
