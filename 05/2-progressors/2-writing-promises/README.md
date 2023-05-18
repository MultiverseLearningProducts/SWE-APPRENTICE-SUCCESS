![MV Logo](/logo.jpg)

# Writing Promises
We've been learning a lot about promises and how to use them, but what... is... a promise?  Like, in code?  To fully understand how a promise works, it's helpful to write a promise using the `Promise` constructor. Let's do that now.

To create a Promise, you use the Promise constructor and pass in a callback function. This callback function receives two arguments: resolve and reject.
```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The data has been resolved");
  }, 1000);
});
```
The `resolve` function is used to resolve the promise. The `reject` function is used to reject the promise. The `setTimeout` function is used to simulate an asynchronous function. The `resolve` function is called after 1 second, which will resolve the promise. The `reject` function is never called, so the promise will never be rejected.

## #checkoutTheDocs 🔍
- [MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Video Resources 🎥
- [JavaScript Promises In 10 Minutes](https://www.youtube.com/watch?v=DHvZLI7Db8E)
