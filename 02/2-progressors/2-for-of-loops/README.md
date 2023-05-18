![MV Logo](../../../logo.jpg)

# `for...of` Loops

- A `for...of` statement executes a loop on an iterable object.
    - `Array` and `String` data types are two examples of iterable objects.
- A `for...of` loop allows programmers to access every value without needing to reference the index value.

## `for...of` Examples

One of the most common uses of a `for...of` loop is to easily access every item in an array. Code for this would look like:
```javascript
// array
const students = ["John", "Sara", "Jack"];

// using for...of
for (let student of students ) {
    console.log(student);
}
```

This would output:

```shell
John
Sara
Jack
```

`for...of` loops can also be used to access all values in String. This  looks like:

```javascript
// string
const string = 'Multiverse';

// using for...of loop
for (let letter of string) {
    console.log(letter);
}
```

The above code would output:

```shell
M
u
l
t
i
v
e
r
s
e
```

## #checkoutTheDocs 🔍
- **MDN**: [`for..of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- **W3Schools**[The For Of Loop](https://www.w3schools.com/js/js_loop_forof.asp)

## Video Resources 🎥
- [Free Code Camp: for in/ for of](https://www.youtube.com/watch?v=a3KHBqH7njs)