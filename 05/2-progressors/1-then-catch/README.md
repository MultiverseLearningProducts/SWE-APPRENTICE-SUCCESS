![MV Logo](/logo.jpg)

# .then() and .catch()
We can deal with asynchronous code using the async/await syntax, but before async/await, there was the `.then()` syntax. The `.then()` syntax is still used in many places, so it's important to understand how it works. To use it, we chain a `.then()` off of the promise returned from an asynchronous function call. The `.then()` takes a callback function that will be called when the asynchronous function resolves. The callback function will be passed the resolved value of the asynchronous function. We can chain multiple `.then()`s together to handle the resolved value of the previous `.then()`. 
```js
somePromise
  .then((value) => {
    console.log(value);
    return 'Goodbye World';
  })
  .then((value) => {
    console.log(value);
  });
```
If any of the `.then()`s throw an error, the error will be passed to the next `.catch()` in the chain. If there is no `.catch()` in the chain, the error will be thrown and crash the program.

```js
somePromise
  .then((value) => {
    console.log(value);
    throw new Error('Something went wrong');
  })
  .catch((error) => {
    console.log(error);
  });
```

## #checkoutTheDocs 🔍
- [MDN .then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
- [MDN .catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

## Video Resources 🎥
- [Javascript Promises vs Async Await EXPLAINED (in 5 minutes)](https://www.youtube.com/watch?v=li7FzDHYZpc)
