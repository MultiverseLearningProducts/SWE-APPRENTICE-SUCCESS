import { default as variables } from './index.js';
const { 
    fixMyScope,
    myCity,
    incrementSum,
} = variables;

describe("check scope of fixMyScope", () => {
    test("fixMyScope is a string", () => {
        expect(typeof fixMyScope).toBe("string")
    });

    test("fixMyScope is contains original string", () => {
        expect(fixMyScope).toBe("Help export me")
    });

})

describe("myCity tests", () => {
    test("myCity has been set to a string", () => {
        expect(typeof myCity).toBe("string")
    });

    test("myCity has been set to New York by function call", () => {
        expect(myCity).toBe("New York")
    });
})

describe("incrementSum tests", () => {
    test("incrementSum is a function", () => {
        expect(typeof incrementSum).toBe("function")
    });

    test("incrementSum increases the value of currentSum by 1 with each function call", () => {
        
        
        expect(incrementSum()).toBe(1)
        expect(incrementSum()).toBe(2)
        expect(incrementSum()).toBe(3)
    });
})