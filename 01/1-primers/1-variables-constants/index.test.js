// These are the tests for the variables in the index.js file
// You do not need to understand how these tests work
// You only need to understand how to run them
// To run these tests, run the following command in your terminal:
// npm test

import { default as variables } from './index.js';
const { age } = variables;

// test for age variable
describe('age', () => {
  // confirms data type
  it('should be a number', () => {
    expect(typeof age).toBe('number');
  });
  // confirms the variable can be redefined
  it('should be able to be redefined', () => {
    age = 10;
    expect(age).toBe(10);
  });
});

// test for name constant
describe('name', () => {
  // confirms data type
  it('should be a string', () => {
    expect(typeof name).toBe('string');
  });
  // confirms the constant cannot be redefined
  it('should not be able to be redefined', () => {
    expect(() => {
      name = 'bob';
    }).toThrow();
  });
}); 

