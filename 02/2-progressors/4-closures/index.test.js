import { default as variables } from './index.js';

const { 
    answer1,
    outer,
    counter,
    createBase
} = variables;

describe("answer1 tests", () => {
    test("answer1 is a number", () => {
        expect(typeof answer1).toBe('number');
    })

    test("answer1 contains the correct values", () => {
        expect(answer1).toBe(20);
    })
})

describe("outer tests", () => {
    test("outer returns a string", () =>{
        expect(typeof outer("🐙")()).toBe("string");
    })

    test("outer and inner tests", () =>{
        expect(outer("🦩")()).toBe("State: 🦩");
        expect(outer("🐟")()).toBe("State: 🐟");
    })
})

describe("counter tests", () => {
    test("counter returns a number", () =>{
        expect(typeof counter(4)()).toBe("number");
    })

    test("counter for increment value of 2", () =>{
        let myTwo = counter(2);
        myTwo();
        let final = myTwo();
        expect(final).toBe(4);
    })

    test("counter for increment value of 10", () =>{
        let myTen = counter(10);
        myTen();
        let final = myTen();
        expect(final).toBe(20);
    })
})

describe("createBase tests", () => {
    test("createBase for a base of 7", () =>{
        let base7 = createBase(7);
        expect(base7(7)).toBe(14);
        expect(base7(10)).toBe(17);
        expect(base7(2)).toBe(9);
    })

    test("createBase for a base of 22", () =>{
        let base22 = createBase(22);
        expect(base22(7)).toBe(29);
        expect(base22(10)).toBe(32);
        expect(base22(2)).toBe(24);
    })
})