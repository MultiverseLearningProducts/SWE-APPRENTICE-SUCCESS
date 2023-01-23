# Ternaries
We know how to control the flow of our application via `if` statements.  But sometimes, we want to assign a value to a variable based on a condition.  For example, we might want to assign a value to a variable based on the result of a function call.  We can do this using a ternary expression.

## Ternary Syntax 🖊
A ternary expression is a one-line if statement.  It is composed of three parts: a condition, a value to return if the condition is true, and a value to return if the condition is false.  The syntax looks like this:
```js
condition ? valueIfTrue : valueIfFalse;
```
For example:
```js
const fourIsEven = 4 % 2 === 0;
console.log(fourIsEven); // true
```
This may seem a little contrived. But we can use ternaries to assign values to variables based on the result of a function call.  For example:
```js
const isEven = (num) => num % 2 === 0;
const fourIsEven = isEven(4);
console.log(fourIsEven); // true
```
Now we can see how this would be useful in a multitude of circumstances. Another example, a common use case: we want to check if a phone number has the correct number of digits.  We can do this with a ternary:

```js
const phoneNumberIsCorrectLength = (phone) => phone.length === 10;
console.log(phoneNumberIsCorrectLength('1234567890')); // true
```

### When to use Ternaries
Ternaries are useful when you want to assign a value to a variable based on a condition.  They are not useful when you want to perform a series of actions based on a condition.  For example, if we want to print out a message to the console based on the result of a function call, we should use an `if` statement:
```js
const isEven = (num) => num % 2 === 0;
if (isEven(4)) {
  console.log('4 is even!');
} else {
  console.log('4 is odd!');
}
```

Or for more complex scenarios (with 3 or more conditions), we should use an `if` statement:
```js
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;
const isZero = (num) => num === 0;
if(isEven(4)) {
  console.log('4 is even!');
} else if (isOdd(4)) {
  console.log('4 is odd!');
} else if (isZero(4)) {
  console.log('4 is zero!');
}
```

## #checkoutTheDocs 🔍
- [MDN: Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
