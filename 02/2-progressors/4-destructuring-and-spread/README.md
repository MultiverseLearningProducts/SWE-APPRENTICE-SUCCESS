![MV Logo](../../../logo.jpg)

# Destructuring and the Spread Operator

Suppose we have the following array of foods

```javascript
const arr = ["🥓", "🍕", "🍟"];
```

If we wanted to store each element in the array in its own variable, we would need to do the following:

```javascript
const bacon = arr[0];
const pizza = arr[1];
const fries = arr[2];
```

However, this is cumbersome and can now be simplified using **destructuring** which was introduced with JavaScript ES6. This makes it possible to unpack values from arrays, or properties from objects, into distinct variables. For the initial array, destructuring would look like:

```javascript
let [bacon, pizza, fries ] = arr;
console.log(pizza) // Prints out 🍕
```

We can also skip a value by omitting the variable name between the commas:
```javascript
let [bacon, , fries ] = arr;
```

Destructuring also works with objects. 

```javascript
const obj = {
    popcorn: "🍿",
    donut: "🍩",
    cookie: "🍪",
}
```

In old pre-ES6 JavaScript, if we wanted each value in it's own variable, we would need to do the following:

```javascript
const popcorn = obj.popcorn;
const donut = obj.donut;
const cookie = obj.cookie;
```

However, with destructuring, we can write this on one line like:
```javascript
const { popcorn, donut, cookie } = obj;
```

## The Spread (`...`) Operator

The JavaScript spread operator (`...`) allows us to quickly copy all or part of an existing array or object into another array or object.

```javascript
const listOne = ["🍔", "🍟", "🍕", "🌮", "🍩"];
const listTwo = ["🍱", "🍲", "🍛", "🍤", "🥩"];
const combinedFoods = [...listOne, ...listTwo];
console.log(combinedFoods) // A combined array of the two original arrays: ["🍔", "🍟", "🍕", "🌮", "🍩", "🍱", "🍲", "🍛", "🍤", "🥩"]
```

The spread operator can also be combined with destructuring:

```javascript
const arr = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌"];
const [food1, food2, ...rest] = arr;
console.log(rest); // ["🍉", "🍊", "🍋", "🍌"]
```

In the above example, `food1` and `food2` are stored in their own variables and the remaining items are stored as a separate array in the `rest` variable.

The spread operator can also be used with objects:

```javascript
const europe = {
    UK: "🇬🇧",
    France: "🇫🇷", 
    Spain: "🇪🇸",
    Germany: "🇩🇪"
}

const northAmerica = {
    USA: "🇺🇸",
    Canada: "🇨🇦",
    Mexico: "🇲🇽",
}

const combinedFlags = {...europe, ...northAmerica}
```

The variable `combinedFlags` now contains a single object that looks like:
```javascript
combinedFlags = {
    UK: "🇬🇧",
    France: "🇫🇷", 
    Spain: "🇪🇸",
    Germany: "🇩🇪",
    USA: "🇺🇸",
    Canada: "🇨🇦",
    Mexico: "🇲🇽",
}
```

## #checkoutTheDocs 🔍
- **W3Schools**: [ES6 Destructuring](https://www.w3schools.com/react/react_es6_destructuring.asp)
- **W3Schools**: [ES6 Spread Operator](https://www.w3schools.com/react/react_es6_spread.asp)

## Video Resources 🎥
- [JS Destructuring in 100 Seconds](https://www.youtube.com/watch?v=a3KHBqH7njs)