import { default as variables } from './index.js';

const { 
    spreadMoreNumbers, 
    foods, 
    monkey, penguin, rest,
    multiply, 
    fullName, 
    findAverage
} = variables;

describe("spreadMoreNumbers tests", () => {
    test("spreadMoreNumbers is a an array with 6 values", () =>{
        expect(spreadMoreNumbers.length).toBe(6);
    })

    test("spreadMoreNumbers has correct values", () =>{
        expect(spreadMoreNumbers.sort()).toEqual([1,2,3,4,5,6].sort());
    })
})

describe("foods tests", () => {

    test("foods is a an array with 10 values", () =>{
        expect(foods.length).toBe(10);
    })

    test("foods has correct values", () =>{
        expect(foods.sort()).toEqual(["🍎", "🍋", "🍇", "🍓", "🍉", "🥦", "🥬", "🥑", "🌶️", "🥒"].sort());
    })
})

describe("rest tests", () => {

    test("rest is an array", () =>{
        expect(Array.isArray(rest)).toBe(true);
    })

    test("rest has correct values", () =>{
        expect(rest.sort()).toEqual(["🐔", "🐺", "🦑", "🐙"].sort());
    })
})

describe("multiply tests", () => {

    test("multiply is a function", () =>{
        expect(typeof multiply).toBe("function");
    })

    test("multiply returns correct value for differential number of arguments", () =>{
        expect(multiply(1,2,3)).toEqual(6);
        expect(multiply(1,2,3,4)).toEqual(24);
        expect(multiply(1,2,7)).toEqual(14);
        expect(multiply()).toEqual(1);
    })
})

describe("fullName tests", () => {

    test("fullName is a function", () =>{
        expect(typeof fullName).toBe("function");
    })

    test("fullName returns correct value for differential number of arguments", () =>{
        expect(fullName("Dan", "Jones")).toEqual("Dan Jones");
        expect(fullName("Preston")).toEqual("Preston");
        expect(fullName("Steven", "Joseph", "Kensington", "IV")).toEqual("Steven Joseph Kensington IV");
        expect(fullName("")).toEqual("");
    })
})


describe("findAverage tests", () => {

    test("findAverage is a function", () =>{
        expect(typeof findAverage).toBe("function");
    })

    test("findAverage returns correct value for differential number of arguments", () =>{
        expect(findAverage({"Malik": 82, "Mariama": 95})).toEqual(89);
        expect(findAverage({"Malik": 82, "Mariama": 95, "Wilmer": 78})).toEqual(85);
    })
})