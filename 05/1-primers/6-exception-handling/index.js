
/* 

In this challenge, you are to create a class BankAccount that represents a bank account. The class should have the following methods:

constructor(balance): This method should take a balance argument and store it as an instance property.

deposit(amount): This method should add the given amount to the account balance.

withdraw(amount): This method should subtract the given amount from the account balance, but only if the balance is sufficient. If the balance is insufficient, the method should throw an error with the message "Insufficient balance."

getBalance(): This method should return the current balance of the account.

Use exception handling in the withdraw method to handle the scenario where the requested withdrawal amount is greater than the available balance.

Note: This challenge assumes that the balance can only be a positive number and that the deposit and withdrawal amounts will always be positive numbers as well.





Example usage:

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150

try {
  account.withdraw(200);
} catch (error) {
  console.error(error.message); // Insufficient balance.
}


*/

export class BankAccount {

}
