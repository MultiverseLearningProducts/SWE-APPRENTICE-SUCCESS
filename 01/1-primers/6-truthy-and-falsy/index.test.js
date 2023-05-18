import { default as variables } from './index.js';
const { 
    truthy,
    falsy,
    truthyOrFalsy,
    checkAge
} = variables;

describe("check truthy and falsy values", () => {
    test("truthy variable contains a truthy value", () => {
        expect(truthy).toBeTruthy()
    });

    test("falsy variable contains a falsy value", () => {
        expect(falsy).toBeFalsy()
    });

})

describe("truthyOrFalsy function check", () => {
    test("returns a string", () => {
        expect(typeof truthyOrFalsy(2)).toBe("string");
    });

    test("returns truthy statement for a truthy value", () => {
        expect(truthyOrFalsy("Hello World")).toBe("This is a truthy value");
    });

    test("returns falsy statement for a truthy value", () => {
        expect(truthyOrFalsy(0)).toBe("This is a falsy value");
    });
})

describe("checkAge function check", () => {
    test("returns a string", () => {
        expect(typeof checkAge(18)).toBe("string");
    });

    test("returns correct statement for age 18 and higher", () => {
        expect(checkAge(18)).toBe("You are an adult");
    });

    test("returns correct statement for age below 18", () => {
        expect(checkAge(2)).toBe("You are a minor");
    });

    test("returns correct statement when number is not provided", () => {
        expect(checkAge(null)).toBe("Age is not provided");
    });

    test("returns correct statement when number is not provided", () => {
        expect(checkAge()).toBe("Age is not provided");
    });
})