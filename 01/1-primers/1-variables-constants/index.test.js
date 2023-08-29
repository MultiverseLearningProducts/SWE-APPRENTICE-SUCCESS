// These are the tests for the variables in the index.js file
// You do not need to understand how these tests work
// You only need to understand how to run them
// To run these tests, run the following command in your terminal:
// npm test

import { age, name, isACoder, pi } from "./index.js";

// test for age variable
describe("`age` variable", () => {
  // confirms data type
  it("should be a number", () => {
    expect(typeof age).toBe("number");
  });
});

// test for name constant
describe("`name` constant", () => {
  // confirms data type
  it("should be a string", () => {
    expect(typeof name).toBe("string");
  });

  it('should be a constant', () => {
    const originalValue = name;

    // Attempt to re-assign the constant (which should not happen)
    const reassignAttempt = () => {
      name = "let's try to change the name";
    };
    
    // Expect that re-assignAttempt will throw a TypeError
    expect(reassignAttempt).toThrow(TypeError);

    // Compare the value after the attempted modification
    expect(name).toBe(originalValue);
  });
});

describe("isACoder", () => {
  // confirms data type
  it("should be a boolean", () => {
    expect(typeof isACoder).toBe("boolean")
  })

  it("should be a value of true", () => {
    expect(isACoder).toBe(true)
  })
})

describe("pi", () => {
  // confirms data type
  it("should be a number", () => {
    expect(typeof pi).toBe("number")
  })

  it("contains the value of pi", () => {
    expect(pi).toBe(3.1415)
  })

  it('should be a constant', () => {
    const originalValue = pi;

    // Attempt to re-assign the constant (which should not happen)
    const reassignAttempt = () => {
      pi = 3.14;
    };
    
    // Expect that re-assignAttempt will throw a TypeError
    expect(reassignAttempt).toThrow(TypeError);

    // Compare the value after the attempted modification
    expect(pi).toBe(originalValue);
  });

})