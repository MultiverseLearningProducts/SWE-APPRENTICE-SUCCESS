import { default as variables } from './index.js';
const {
  subtract,
  sum,
  convert,
  addition,
  concatenate,
  isEqual,
  max,
  isEmpty,
} = variables;

describe('subtract', () => {
  it('should be a function', () => {
    expect(typeof subtract).toBe('function');
  });

  it('should subtract two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(4, 2)).toBe(2);
    expect(subtract(2, 2)).toBe(0);
  });

  it('should work with negative numbers', () => {
    expect(subtract(5, -2)).toBe(7);
    expect(subtract(-5, 2)).toBe(-7);
    expect(subtract(-5, -2)).toBe(-3);
  });

});

describe("sum", () => {
  test("should return the sum of two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("convert", () => {
  test("should convert minutes to seconds", () => {
    expect(convert(5)).toBe(300);
    expect(convert(3)).toBe(180);
    expect(convert(2)).toBe(120);
  });
});

describe("addition", () => {
  test("should increment the number by +1 and return the result", () => {
    expect(addition(0)).toBe(1);
    expect(addition(9)).toBe(10);
    expect(addition(-3)).toBe(-2);
  });
});

describe("concatenate", () => {
  test("should return the concatenation of two strings", () => {
    expect(concatenate("a", "b")).toBe("ab");
    expect(concatenate("code", "up")).toBe("codeup");
    expect(concatenate("connect", "four")).toBe("connectfour");
  });
});

describe("isEqual", () => {
  test("should return true if the two arguments are strictly equal", () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual("1", 1)).toBe(false);
    expect(isEqual("1", "1")).toBe(true);
    expect(isEqual("billy", "billy")).toBe(true);
    expect(isEqual("billy", "bill")).toBe(false);
  });
});

describe("max", () => {
  test("should return the largest number of three numbers", () => {
    expect(max(1, 2, 3)).toBe(3);
    expect(max(5, 3, 1)).toBe(5);
    expect(max(5, 5, 5)).toBe(5);
    expect(max(5, 5, 1)).toBe(5);
  });
});

describe("isEmpty", () => {
  test("should return true if the string is empty, otherwise returns false", () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty(" ")).toBe(false);
    expect(isEmpty("a")).toBe(false);
  });
});


