import { totalPrice, amtInWallet, balance } from "./checkout.js";

describe("balance", () => {
  it("should be a number", () => {
    expect(typeof balance).toBe("number");
  });
  it("should be the amount of amtInWallet minus totalPrice", () => {
    expect(balance).toBe(amtInWallet - totalPrice);
  });
});
