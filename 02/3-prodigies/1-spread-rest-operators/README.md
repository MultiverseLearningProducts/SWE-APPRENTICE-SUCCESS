![MV Logo](../../../logo.jpg)

# Spread vs Rest Operators

We've already learned about the spread operator, which is used to spread out the elements of an array into another array/iterable. The rest operator is used to do the opposite: extract "the rest" of the elements from an iterable.

## The Spread (`...`) Operator

The spread operator (...) allows an iterable (such as an array or object) to be expanded into individual elements or properties. It can be used in situations such as adding items to an array or merging objects.

As we saw in the previous example, the Spread operator:

```js
const listOne = ["🍔", "🍟", "🍕", "🌮", "🍩"];
const listTwo = ["🍱", "🍲", "🍛", "🍤", "🥩"];
const combinedFoods = [...listOne, ...listTwo];
console.log(combinedFoods) // A combined array of the two original arrays: ["🍔", "🍟", "🍕", "🌮", "🍩", "🍱", "🍲", "🍛", "🍤", "🥩"]
```

## The Rest (`...`) Operator

The rest operator (also represented by `...`) is used to gather remaining elements or properties into a single variable. 

For example, if we have an array of fruits and we want to store the first two fruits in their own variables and the remaining fruits in a separate array, we can use the rest operator. In this case, it is otherwise known as the _"rest property"_.

```js
const arr = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌"];
const [food1, food2, ...rest] = arr;;
console.log(rest); // ["🍉", "🍊", "🍋", "🍌"]
```

A common use case for the rest operator is in function parameter lists (otherwise known as the _"rest parameter"_). The rest parameter allows us to represent an indefinite number of arguments as an array.

```js
function sum(...nums) {
  return nums.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
```

## #checkoutTheDocs 🔍
- [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Rest Property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property)

