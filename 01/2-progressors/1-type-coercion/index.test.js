import { default as variables } from './index.js';

const { 
    sumTypeOf,
    validateIt,
    separateTypes,
    answer1,
    answer2,
    answer3,
    answer4
} = variables;

describe("sumTypeOf tests", () => {
    test("sumTypeOf(12, 1) returns a typeof number", () => {
        expect(sumTypeOf(12, 1)).toBe("number");
    })

    test("sumTypeOf('d', 1) returns a string", () => {
        expect(sumTypeOf("d", 1)).toBe("string");
    })

    test("sumTypeOf(1, 'a') returns a string", () => {
        expect(sumTypeOf(1, "a")).toBe("string");
    })

    test("sumTypeOf(true, 1) returns a number", () => {
        expect(sumTypeOf(true, 1)).toBe("number");
    })
})

describe("validateIt tests", () => {
    test("validateIt(42, 'number') returns a true", () => {
        expect(validateIt(42, "number")).toBe(true);
    })

    test("validateIt('42', 'number') returns a false", () => {
        expect(validateIt('42', 'number')).toBe(false);
    })
})

describe("expression type coercion tests", () => {
    test("answer1 evaluates to the correct value", () => {
        expect(answer1).toBe("true1");
    });

    test("answer2 evaluates to the correct value", () => {
        expect(answer2).toBe("number153");
    });

    test("answer3 evaluates to the correct value", () => {
        expect(answer3).toBe(false);
    });

    test("answer4 evaluates to the correct value", () => {
        expect(answer4).toBe(6);
    });
})

describe("validateIt tests", () => {
    test("given ['a', 1, 2, false, 'b']", function() {
        expect(separateTypes(['a', 1, 2, false, 'b'])).toEqual({number: [1, 2],  string: ['a', 'b'], boolean: [false]});
    });

    test("given ['a', 1, 2 ]", function() {
        expect(separateTypes(['a', 1, 2 ])).toEqual({number: [1, 2],  string: ['a']})
    });

})