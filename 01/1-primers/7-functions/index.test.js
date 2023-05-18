import { default as variables } from './index.js';
const { myName, currentYear } = variables;

describe('myName', () => {
  it('should return a string', () => {
    expect(typeof myName()).toBe('string');
  });

  it('should return a string with characters in it', () => {
    expect(myName()).not.toBe('');
  });
});

describe('currentYear', () => {
  it('should be a number', () => {
    expect(typeof currentYear()).toBe('number');
  });

  it('should be the current year', () => {
    const currentDate = new Date();
    const thisYear = currentDate.getFullYear();
    expect(currentYear()).toBe(thisYear);
  });
});

