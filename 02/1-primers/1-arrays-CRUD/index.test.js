import { default as variables } from './index.js';

const { 
    fruits,
    isPineapple,
    isCarrot,
    grapeIndex,
    element5
} = variables;


describe("Fruits arrays test", () => {
    test("has 'orange' as the first element", () => {
        expect(fruits[0]).toBe('orange');
    })

    test('has "raspberry" as the first element', () => {
        expect(fruits[fruits.length - 1]).toBe('raspberry');
    });

    test('has "mango" as the sixth element', () => {
         expect(fruits[5]).toBe('mango');
    });

    test('has an updated 5th element value as "Leeloo Dallas Multipass"', () => {
        expect(fruits[4]).toBe('Leeloo Dallas Multipass');
    });

    test('has a length of 7', () => {
        expect(fruits.length).toBe(7);
    });

    test('does not have a value of "banana"', () => {
        const expected = fruits.includes('banana');
        expect(expected).toBe(false);
    });
})

describe('Variables isCarrot, isPineapple, grapeIndex, and element5', () => {
    it('isPineapple has a value of true', () => {
        expect(isPineapple).toBe(true);
    });

    test('isCarrot has a value of false', () => {
        expect(isCarrot).toBe(false);
    });

    test("grape has an index of 3", () => {
        expect(grapeIndex).toBe(3);
    })

    test("element5 contains the 5th element in the array", () => {
        expect(element5).toBe("refined uranium")
    })

})