![MV Logo](../../../logo.jpg)

# Truthy and Falsy Values
- Type coercion is the process of automatic or implicit conversion of values from one data type to another
- Javascript uses type coercion in Boolean contexts to evaluate values to be either “Truthy” or “Falsy”.
    - A **truthy** value is a value considered `true` when encountered in a Boolean context (like conditionals and loops).
    - A **falsy** value is a value considered `false` when encountered in a Boolean context (like conditionals and loops).

## Truthy and Falsy Values
The following table contains most of the values that are falsy in JavaScript. [A full list can be found on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) 🔍. 

| Value | Description |
| ----- | ----------- |
| `false` | The keyword `false` |
| `0` | The Number zero (also 0.0, etc.) |
| `-0` | The Number negative 0 |
| `""`,`''`, ``  | Empty string value |
| `null` | The absence of any value |
| `undefined` | The primitive value |
| `NaN` | Not a number |


⭐️ **Any value not considered falsy will be truthy**.

>There are a few additional values (`0n`, `document.all`, etc.) that are also considered falsy, but are beyond the scope of the content we are currently covering. Feel free to explore the documentation to learn more about these!

## Truthy and Falsy Examples

Consider the following conditional expression:

```javascript
if("Hello I am a string"){
    console.log("This value is truthy.")
}
else {
    console.log("This value is falsy.")
}
```

This will output the following since a non-empty string evaluates to `true`.

```shell
This value is truthy.
```

By contrast, consider the following:

```javascript
if(0){
    console.log("This value is truthy.")
}
else {
    console.log("This value is falsy.")
}
```

This will output the following since the value `0` evaluates to `false`.

```shell
This value is falsy.
```

## #checkoutTheDocs 🔍
- **MDN**: [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- **MDN**: [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

## Video Resources 🎥
- [Truthy and Falsy Values](https://www.youtube.com/watch?v=SR5Rsiv3zRs)