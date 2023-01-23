![MV Logo](../../../logo.jpg)

# Iterating with `for...in` Loops
- Since objects do ***not*** have index values, we cannot iterate with a simple `for` loop.
- `For...in` loops are a common programming structure that allows for us to iterate through key-value pairs in an object.

## `for...in` Loop Syntax 🖊

For the values stored in `someObj`, the for...in loop would look like the following code:

```javascript
let someObj = {
  name: "Multiverse 🚀",
  week: 2,
  concept: "JavaScript Objects"
}

for(const key in someObj){
    console.log(`The key is ${key}`);
    // NOTE: YOU NEED TO USE SQUARE BRACKETS
    console.log(`The value is ${someObj[key]}`);
}
```

The output to the console would be:

```shell
The key is name
The value is Multiverse 🚀
The key is week
The value is 2
The key is concept
The value is JavaScript Objects
```

## #checkoutTheDocs 🔍
- **MDN**: [for…in Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

## Video Resources 🎥
- [For in Loop in JavaScript](https://www.youtube.com/watch?v=-PVcUUj_ke4)