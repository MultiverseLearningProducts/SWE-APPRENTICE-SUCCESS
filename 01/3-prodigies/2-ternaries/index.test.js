import { default as functions } from './index.js';
let {
  isFamous,
  isHot
} = functions;

describe('isFamous', () => {
  it('returns true if the number of followers is greater than 100,000', () => {
    expect(isFamous(150000)).toBe(true);
    expect(isFamous(200000)).toBe(true);
  });
  it('returns false if the number of followers is less than 100,000', () => {
    expect(isFamous(50000)).toBe(false);
    expect(isFamous(100000)).toBe(false);
  });
});

describe('isHot', () => {
  it('returns hot if the temperature is greater than 30', () => {
    expect(isHot(35)).toBe('hot');
    expect(isHot(40)).toBe('hot');
  });
  it('returns not hot if the temperature is less than 30', () => {
    expect(isHot(25)).toBe('not hot');
    expect(isHot(30)).toBe('not hot');
    expect(isHot(20)).toBe('not hot');
  });
});
