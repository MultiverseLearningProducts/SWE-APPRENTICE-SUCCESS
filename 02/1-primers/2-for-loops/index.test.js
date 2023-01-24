import { default as variables } from './index.js';
const { 
  stringRange,
  factorial,
  countDigits,
  sumOfDigits
} = variables;

describe("stringRange tests", () => {
    test("should return a string", () => {
        expect(typeof stringRange(1, 2)).toBe("string");
    });

    test("string test for range -3 to 5", () => {
        expect(stringRange(-3, 5)).toBe('-3 -2 -1 0 1 2 3 4 5');
    });

    test("string test for range 2 to 5", () => {
        expect(stringRange(2, 5)).toBe("2 3 4 5");
    });
})

describe("factorial tests", () => {
    test("should return a number", () => {
        expect(typeof factorial(2)).toBe("number");
    });

    test("factorial for n = 4", () => {
        expect(factorial(4)).toBe(24);
    });

    test("factorial for n = 1", () => {
        expect(factorial(1)).toBe(1);
    });
})

describe("countDigits tests", () => {
    test("returns a number", () => {
        expect(typeof countDigits(21)).toBe("number");
    })

    test('countDigits argument with 2 digits', () => {
        expect(countDigits(91)).toBe(2);
    });

    test('countDigits argument with 9 digits', () => {
        expect(countDigits(918273645)).toBe(9);
    });
})

describe("sumOfDigits tets", () => {
    test("returns a number", () => {
        expect(typeof sumOfDigits(417)).toBe("number");
    });

    test("sumOfDigits(417) returns 12", () => {
        expect(sumOfDigits(417)).toBe(12);
    });

    test("sumOfDigits(1223) returns 8", () => {
        expect(sumOfDigits(1223)).toBe(8);
    })
})