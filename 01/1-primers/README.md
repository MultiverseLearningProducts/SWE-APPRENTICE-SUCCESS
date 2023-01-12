# Week 1 - Primers

## Variable Declaration and Assignment:

- Variables are used to store data in a program. They are like containers that hold a value.
- In order to create a variable, you need to declare it by specifying its name and the data type it will hold. For example:
`let name = "John";`
- Assignment operator (=) is used to assign a value to the variable. 

For example:
```js
let age = 25;
let name = "John";
```

## `const` vs. `let`:

`const` and `let` are used to declare variables in JavaScript.
The main difference between them is that a variable declared with `const` cannot be reassigned, while a variable declared with `let` can be reassigned.
For example:
```js
const a = 3;
a = 4; // This will throw an error because 'a' is a constant and can't be reassigned

let b = 3;
b = 4; // This is okay because 'b' is a let variable and can be reassigned
```

### checkoutTheDocs 🔍
- [MDN: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

## Primitive Data Types:

Primitive data types are the basic data types that a programming language uses to represent a value.
JavaScript has primitive data types: 
- undefined
- null
- string
- number
- boolean

For example:

```js
let name = "John"; // String
let age = 25; // Number
let isStudent = true; // Boolean
```

### checkoutTheDocs 🔍
- [MDN: Data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [MDN: typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- Primitive data types
  - [MDN: undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
  - [MDN: null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
  - [MDN: string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
  - [MDN: number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
  - [MDN: boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

## Comparison Operators:

Comparison operators are used to compare two values and return a Boolean value (true or false).
JavaScript has several comparison operators: `>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, and `!==`.

For example:

```js
let age = 25;
console.log(age > 20); // true
console.log(age < 30); // true
console.log(age === 25); // true
console.log(age !== 30); // true
console.log(age === 30); // false
console.log(age !== 25); // false
```

### checkoutTheDocs 🔍
- [MDN: Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [MDN: Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [MDN: Strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [MDN: Strict inequality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
- [MDN: Loose equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Loose_equality)
- [MDN: Loose inequality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Loose_inequality)


## Logical Operators:

Logical operators are used to combine two or more comparison operators.
JavaScript has three logical operators: `&&`, `||`, and `!`.

For example:

```js
let age = 25;
console.log(age > 20 && age < 30); // true
console.log(age > 20 || age < 30); // true
console.log(!(age > 20)); // false
```

### checkoutTheDocs 🔍
- [MDN: Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
- [MDN: Logical AND (&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [MDN: Logical OR (||)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [MDN: Logical NOT (!)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)

## Writing Conditional Statements
Conditional statements are used to perform different actions based on different conditions.

The `if` statement is one way to write conditional logic in JavaScript.

For example:

```js
let age = 25;
if (age > 20) {
  console.log("You are older than 20.");
} else {
  console.log("You are 20 or younger.");
}
```

### checkoutTheDocs 🔍
- [MDN: if...else statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

## Declaring and Calling Functions:

- Functions are reusable blocks of code that perform a specific task.
- To create a function, you can use the keyword function followed by the function name and a set of parentheses.

For example:

```js
function sayHello() {
  console.log("Hello!");
}
```

To call a function, you can use the function name followed by a set of parentheses.

For example:

```js
sayHello(); // This will print "Hello!" to the console
```

### checkoutTheDocs 🔍
- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN: Function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

## Creating Functions with Parameters and Return Values:

- Functions can also take input, known as parameters, and return output, known as return values.
- Parameters are specified inside the parentheses of the function definition, and can be passed in when the function is called.

For example:

```js
function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4)); // 12
```

### checkoutTheDocs 🔍
- [MDN: Parameters](https://developer.mozilla.org/en-US/docs/Glossary/Parameter)
- [MDN: Return value](https://developer.mozilla.org/en-US/docs/Glossary/Return_value)


## Debugging: Types of Errors:

- Debugging is the process of finding and fixing errors in a program.
- There are several types of errors that can occur in a program:
  - Reference errors: occur when a variable is not declared or is out of scope.
  - Syntax errors: occur when the program is not written according to the correct syntax of the programming language.
  - Type errors: occur when the program is written correctly but the data type of a variable is not what is expected.

- Common debugging tools and techniques include: using `console.log()` to print out variable values and check logic, using the browser developer tools, and using a linter to check for syntax errors.
- To find your bug, it's best to use a methodical approach and do a stack trace to find the source of the error. 
- Sometimes, we just encounter unexpected results.

For example:
  
```js
function add(a, b) {
  return a + b;
}
console.log(add(1, 2)); // 3
console.log(add("1", "2")); // 12
console.log(add("1", 2)); // 12
```
Why does this function give different output with seemingly identical arguments?

In order to get to the bottom of this issue, we can add a `console.log` statement to the function and then call the function with different arguments.  We can combine it with the typeof operator to figure out whats wrong.

```js
function add(a, b) {
  console.log(typeof a, typeof b);
  return a + b;
}
```

### checkoutTheDocs 🔍
- [MDN: Reference errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined)
- [MDN: Syntax errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Syntax)
- [MDN: Type errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function)
