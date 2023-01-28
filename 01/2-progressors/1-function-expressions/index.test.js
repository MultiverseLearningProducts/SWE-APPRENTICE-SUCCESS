import { default as functions } from './index.js';
let { isAdult } = functions;

describe('isAdult', () => {
  it('returns true for age 18 and older', () => {
      expect(isAdult(18)).toBe(true);
      expect(isAdult(20)).toBe(true);
  });
  it('returns false for ages under 18', () => {
      expect(isAdult(17)).toBe(false);
      expect(isAdult(16)).toBe(false);
  });
});

describe('isOdd', () => {
  it('returns true for odd numbers', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(5)).toBe(true);
  });
  it('returns false for even numbers', () => {
      expect(isOdd(2)).toBe(false);
      expect(isOdd(4)).toBe(false);
  });
});

describe('isPositive', () => {
  it('returns true for positive numbers', () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(0.5)).toBe(true);
  });
  it('returns false for non-positive numbers', () => {
      expect(isPositive(0)).toBe(false);
      expect(isPositive(-1)).toBe(false);
      expect(isPositive(-0.5)).toBe(false);
  });
});

describe('isLeapYear', () => {
  it('returns true when it is leap year', () => {
      expect(isLeapYear(2000)).toBe(true);
      expect(isLeapYear(2004)).toBe(true);
      expect(isLeapYear(1600)).toBe(true);
  });
  it('returns false for non-leap years', () => {
      expect(isLeapYear(2100)).toBe(false);
      expect(isLeapYear(1900)).toBe(false);
      expect(isLeapYear(2015)).toBe(false);
  });
});
