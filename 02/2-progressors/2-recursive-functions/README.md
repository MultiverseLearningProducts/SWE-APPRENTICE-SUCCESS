![MV Logo](../../../logo.jpg)

# Recursion
- Recursion is when a function must call itself in order to resolve a solution.
- There are two essential parts to any recursive call:
    1. **Base Case**: The problem can be solved without any more recursive calls.
    2. **Recursive Case**: When there is a need to continue breaking down a problem because the base case has not been reached yet.
- Recursion can be either direct or indirect:
    - **Direct Recursion**: The recursive case is the function is calling itself.
    - **Indirect Recursion**: The recursive case calls a separate function that references back tot he original function.

## Direct Recursion Example

Suppose we wanted to create a function called `countDown` that counts down from n to 0 using recursion. Using direct recursion, the recursive case will call itself. This could look like:

```javascript
function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // Recursive Case
    if (newNumber > 0) {
        countDown(newNumber);
    }
    // Base Case
    if(newNumber === 0){
        console.log(0);
        return;
    }
}

countDown(4);
```

This will output:

```shell
4
3
2
1
0
```

## Indirect Recursion Example
Below is an example of indirect recursion where `funA(n)` calls `funB(n)` as its recursive case and vice versa.

```javascript
function funA(n)
{
    if (n > 0) {
        console.log(n);
  
        // fun(A) is calling fun(B)
        funB(n - 1);
    }
    // Base case
    return;
}
  
function funB(n)
{
    if (n > 1) {
        console.log(n);

        // fun(B) is calling fun(A) after rounding n down to remove a decimal.
        funA(Math.floor(n / 2));
    }
    // Base case
    return;
}
  
// Initial function call
funA(20);
```

This would output:

```shell
20
19
9
8
4
3
1
```

## #checkOutTheDocs 🔍
- **Free Code Camp**: [A Quick Intro To Recursion](https://www.freecodecamp.org/news/quick-intro-to-recursion/)

## Video Resources 🎥
- [Recursion in JavaScript](https://www.youtube.com/watch?v=LteNqj4DFD8)