# Anonymous Functions
We know how to create a function declaration:
```js
function sayHello() {
  console.log('Hello!');
}
```
and we know how to create a function expression:
```js
const sayHello = function () {
  console.log('Hello!');
};
```
But what if we want to create a function that is not bound to a name? We can do that using anonymous functions.

Anonymous Functions are functions that are not bound to a name. (In other words, the function isn't stored in a variable.) They are usually used as arguments to other functions. For example, the `setTimeout` function takes an anonymous function as an argument. The anonymous function is executed after the specified time interval. 

For example:
```js
setTimeout(function () {
  console.log('Hello World!');
}, 1000);
```

In the above example, the anonymous function is passed as an argument to the `setTimeout` function. The anonymous function is executed after 1 second.

## checkoutTheDocs 🔍
- [MDN: Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Anonymous_functions)



## Video Resources 🎥
- [Anonymous Functions](https://www.youtube.com/watch?v=Y8dztLmscwc)
