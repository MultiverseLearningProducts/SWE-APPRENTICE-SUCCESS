![MV Logo](/logo.jpg)

# Class Inheritance and Encapsulation

## Class Inheritance
Class inheritance is a way for one class to inherit the properties and methods of another class. This allows for creating new classes that are based on existing classes, thus promoting code reusability. In JavaScript, inheritance is achieved through the "extends" keyword.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Max');
dog.speak();
// Output: Max barks.
```

## Encapsulation (private properties)
Encapsulation is a fundamental principle of Object-Oriented Programming (OOP) that provides a way to limit access to certain properties and methods of an object. In JavaScript, encapsulation can be achieved by using the "private" keyword or by using closures.

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
```

In this example, the balance property is prefixed with a hash symbol (#) indicating that it is a private property and can only be accessed within the class. Attempting to access the balance property directly will result in an error.

### #checkoutTheDocs 🔍
- [Class Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
- [Private Class Fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

## Video Resources 🎥
- [Object Oriented Programming in JavaScript](https://www.youtube.com/watch?v=PFmuCDHHpwk)
