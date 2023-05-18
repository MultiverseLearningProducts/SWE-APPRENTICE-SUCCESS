import { default as functions } from './index.js';
let {
  isTooMuch,
  isWeekend,
} = functions;

describe('isTooMuch', () => {
  it('returns false if amount is greater than the limit', () => {
      expect(isTooMuch(5,10)).toBe(false);
      expect(isTooMuch(0,10)).toBe(false);
  });
  it('returns true if amount not greater than the limit', () => {
      expect(isTooMuch(15,10)).toBe(true);
      expect(isTooMuch(15,0)).toBe(true);
  });
});
