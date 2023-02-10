import { BankAccount } from './index.js';

describe("BankAccount", () => {
  let account;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  it("should have a balance", () => {
    expect(account.getBalance()).toBe(100);
  });

  it("should be able to deposit money", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  it("should be able to withdraw money", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  it("should throw an error for insufficient balance", () => {
    expect(() => {
      account.withdraw(200);
    }).toThrowError("Insufficient balance.");
  });
});
