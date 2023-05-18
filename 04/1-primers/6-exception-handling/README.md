![MV Logo](/logo.jpg)

# Exception Handling in Classes
Exception handling is a technique used to handle runtime errors in a program. In JavaScript, errors can be handled using try-catch statements.

Here's an example of how exception handling can be used in a class:

```js
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    if (this.balance - amount < 0) {
      throw new Error("Insufficient balance.");
    }
    this.balance -= amount;
  }
}

const account = new BankAccount(100);

try {
  account.withdraw(200);
} catch (error) {
  console.error(error.message); // Insufficient balance.
}
```
In this example, the `withdraw` method checks if the requested withdrawal amount is greater than the available balance. If it is, it throws an error with the message "Insufficient balance." The try-catch statement is used to catch this error and handle it by printing an error message to the console.

By using exception handling, you can prevent the program from crashing when an error occurs, and instead, handle it gracefully by providing the user with an error message or performing any necessary recovery actions.


### #checkoutTheDocs 🔍
- [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

## Video Resources 🎥
- [try, catch, finally, throw - error handling in JavaScript](https://www.youtube.com/watch?v=cFTFtuEQ-10)
