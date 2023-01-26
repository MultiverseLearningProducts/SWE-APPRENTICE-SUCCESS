import { default as variables } from './index.js';
import {jest} from '@jest/globals'

const { 
    recursiveCounter,
    factorial,
    getCombinations,
    getPizzas,
    toppings
} = variables;

describe("recursiveCounter tests", () => {


    test('recursiveCounter(8) logs every number counting down between 8 passed to it and 0, including 0', () => {
        // we'll mock and spy on console.log to make sure it's called correctly
        console.log = jest.fn();
    
        recursiveCounter(8);
    
        // check that console.log was first called with the number 8
        expect(console.log.mock.calls[0][0]).toEqual(8);
    
        // check that console.log was then called with the number 9
        expect(console.log.mock.calls[1][0]).toEqual(7);
    
        // // check that console.log was then called with the number 10
        expect(console.log.mock.calls[2][0]).toEqual(6);
    
        // // check that console.log was called exactly three times
        expect(console.log.mock.calls.length).toEqual(9);
    });

    test('recursiveCounter(2) logs every number counting down between 2 passed to it and 0, including 0', () => {
        // we'll mock and spy on console.log to make sure it's called correctly
        console.log = jest.fn();
    
        recursiveCounter(2);
    
        // check that console.log was first called with the number 2
        expect(console.log.mock.calls[0][0]).toEqual(2);
    
        // // check that console.log was then called with the number 0
        expect(console.log.mock.calls[2][0]).toEqual(0);
    
        // // check that console.log was called exactly three times
        expect(console.log.mock.calls.length).toEqual(3);
    });
})

describe("factorial tests", () => {
    test("factorial returns correct value of 4!, 5!, and 6!", () => {
        expect(factorial(4)).toBe(24);
        expect(factorial(5)).toBe(120);
        expect(factorial(6)).toBe(720);
    });

    test("factorial function returns 1 for 0! (0 factorial)", () => {
        expect(factorial(0)).toBe(1);
    });

    test("factorial function returns false for all values n less than 0", () => {
        expect(factorial(-10)).toBe(false);
    });
})

describe("getCombinations tests", () => {
    test("getCombinations returns an array", () => {
        expect(Array.isArray(getCombinations(2))).toBe(true);
        
    });
    let twoCombo = ['aa', 'ab', 'ba', 'bb']
    let threeCombo = ['aaa', 'baa','aba', 'bba','aab', 'bab','abb', 'bbb']

    test("getCombinations returns all possible combinations of a and b with length of 2", () => {
        expect(getCombinations(2).sort()).toEqual(twoCombo.sort());
    })

    test("getCombinations returns all possible combinations of a and b with length of 3", () => {
        expect(getCombinations(3).sort()).toEqual(threeCombo.sort());
    })

})

describe("getPizzas tests", () => {
    let twoPizzas = getPizzas(toppings, 2);
    let twoCombo = ['pepperoni, pepperoni','pepperoni, mushroom','pepperoni, pineapple','pepperoni, red onion','mushroom, pepperoni','mushroom, mushroom','mushroom, pineapple','mushroom, red onion','pineapple, pepperoni','pineapple, mushroom','pineapple, pineapple','pineapple, red onion','red onion, pepperoni','red onion, mushroom','red onion, pineapple','red onion, red onion'];
    let threePizzas = getPizzas(toppings, 3);
    let threeCombo = ['pepperoni, pepperoni, pepperoni','pepperoni, pepperoni, mushroom','pepperoni, pepperoni, pineapple','pepperoni, pepperoni, red onion','pepperoni, mushroom, pepperoni','pepperoni, mushroom, mushroom','pepperoni, mushroom, pineapple','pepperoni, mushroom, red onion','pepperoni, pineapple, pepperoni','pepperoni, pineapple, mushroom','pepperoni, pineapple, pineapple','pepperoni, pineapple, red onion','pepperoni, red onion, pepperoni','pepperoni, red onion, mushroom','pepperoni, red onion, pineapple','pepperoni, red onion, red onion','mushroom, pepperoni, pepperoni','mushroom, pepperoni, mushroom','mushroom, pepperoni, pineapple','mushroom, pepperoni, red onion','mushroom, mushroom, pepperoni','mushroom, mushroom, mushroom','mushroom, mushroom, pineapple','mushroom, mushroom, red onion','mushroom, pineapple, pepperoni','mushroom, pineapple, mushroom','mushroom, pineapple, pineapple','mushroom, pineapple, red onion','mushroom, red onion, pepperoni','mushroom, red onion, mushroom','mushroom, red onion, pineapple','mushroom, red onion, red onion','pineapple, pepperoni, pepperoni','pineapple, pepperoni, mushroom','pineapple, pepperoni, pineapple','pineapple, pepperoni, red onion','pineapple, mushroom, pepperoni','pineapple, mushroom, mushroom','pineapple, mushroom, pineapple','pineapple, mushroom, red onion','pineapple, pineapple, pepperoni','pineapple, pineapple, mushroom','pineapple, pineapple, pineapple','pineapple, pineapple, red onion','pineapple, red onion, pepperoni','pineapple, red onion, mushroom','pineapple, red onion, pineapple','pineapple, red onion, red onion','red onion, pepperoni, pepperoni','red onion, pepperoni, mushroom','red onion, pepperoni, pineapple','red onion, pepperoni, red onion','red onion, mushroom, pepperoni','red onion, mushroom, mushroom','red onion, mushroom, pineapple','red onion, mushroom, red onion','red onion, pineapple, pepperoni','red onion, pineapple, mushroom','red onion, pineapple, pineapple','red onion, pineapple, red onion','red onion, red onion, pepperoni','red onion, red onion, mushroom','red onion, red onion, pineapple','red onion, red onion, red onion'];

    test("getPizzas returns an array", () => {
        expect(Array.isArray(twoPizzas)).toBe(true);
    });

    test("getPizzas(2, toppings) returns all possible combinations of two toppings", () => {
        expect(twoPizzas.sort()).toEqual(twoCombo.sort())
    })

    test("getPizzas(3, toppings) returns all possible combinations of two toppings", () => {
        expect(threePizzas.sort()).toEqual(threeCombo.sort())
    })
})