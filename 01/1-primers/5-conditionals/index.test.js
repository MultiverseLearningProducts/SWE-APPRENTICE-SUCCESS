import { default as variables } from './index.js';
const {
  activity,
  happy,
} = variables;

describe('happy', () => {

  it('is happy only if activity is `dancing` or `swimming`', () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let happyValues = {
      'swimming': 'happy',
      'dancing': 'happy',
      'running 10 miles in the rain': 'sad',
      'shoveling snow': 'sad',
    }

    expect(happy).toEqual(happyValues[activity]);
  });

});