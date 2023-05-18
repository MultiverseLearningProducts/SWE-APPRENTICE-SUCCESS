![MV Logo](../../../logo.jpg)

#  Closures

A closure is a function that has access to variables in its parent scope, even after the parent function has returned.

Consider the following nested function: 

```javascript
function outerFunction(x) {
    let y = 10;
    function innerFunction() {
        console.log(x + y);
    }
    return innerFunction;
}
```

In this example, `innerFunction()` has access to the outer variables `x` and `y` even after `outerFunction` has returned. Thus, we can run the following:

```javascript
let myClosure = outerFunction(5);
myClosure(); // Logs 15
```

In the above example, `return innerFunction` returns the `innerFunction` from the `outerFunction`. The variable `myClosure` references the `innerFunction`, but can access `y` because of the closure that was created.

One important aspect of closures is that it maintains state between multiple calls. Thus, if we were to create the following closure:

```javascript
function counterClosure() {
    let counter = 0;
    function increaseCounter() {
        return counter += 1;
    }
    return increaseCounter;
}

let myCounter = counterClosure();
```

This can be called multiple times and the value of `counter` will continue to increase:

```javascript
console.log(myCounter()) // 1
console.log(myCounter()) // 2
console.log(myCounter()) // 3
console.log(myCounter()) // 4
```

## #checkoutTheDocs 🔍
- **MDN**: [JavaScript Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- **Tutorials Teacher**: [JavaScript Closures](https://www.tutorialsteacher.com/javascript/closure-in-javascript)

## Video Resources 🎥
- [Closures Explained in 100 Seconds](https://www.youtube.com/watch?v=vKJpN5FAeF4)