// These are the tests for the variables in the index.js file
// You do not need to understand how these tests work
// You only need to understand how to run them
// To run these tests, run the following command in your terminal:
// npm test

import { default as variables } from './index.js';
let { age } = variables;
const { name } = variables;

// test for age variable
describe('`age` variable', () => {
  // confirms data type
  it('should be a number', () => {
    expect(typeof age).toBe('number');
  });
});

// test for name constant
describe('`name` constant', () => {
  // confirms data type
  it('should be a string', () => {
    expect(typeof name).toBe('string');
  });
}); 

