import { default as variables } from './happy.js';
const {
  activity,
  happy,
} = variables;

describe('happy', () => {

  it('is happy only if activity is `dancing` or `swimming`', () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let happyValues = {
      'swimming': true,
      'dancing': true,
      'running 10 miles in the rain': false,
      'shoveling snow': false,
    }

    expect(happy).toEqual(happyValues[activity]);
  });

});