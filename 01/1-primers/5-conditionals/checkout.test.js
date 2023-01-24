import { default as variables } from './checkout.js';
const {
  totalPrice,
  amtInWallet,
  balance,
} = variables;

describe('balance', () => {
  it('should be a number', () => {
    expect(typeof balance).toBe('number');
  });
  it('should be the amount of amtInWallet minus totalPrice', () => {
    expect(balance).toBe(amtInWallet - totalPrice);
  });
});
