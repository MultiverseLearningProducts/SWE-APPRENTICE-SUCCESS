// These are the tests for the variables in the index.js file
// You do not need to understand how these tests work
// You only need to understand how to run them
// To run these tests, run the following command in your terminal:
// npm test

import { default as variables } from './index.js';
const { age } = variables;

describe('age', () => {
  it('should be a number', () => {
    expect(typeof age).toBe('number');
  });
});

