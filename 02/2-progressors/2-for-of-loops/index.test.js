import { default as variables } from './index.js';

const { 
    addIt,
    capitalizeAll,
    cleanUp,
    bigWords,
    unduplicate
} = variables;

describe("addIt tests", () => {
    let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // total = 276
    let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // total = 351

// addIt(arr_1, arr_2); => returns 627
    test("addIt returns a number", () => {
        expect(typeof addIt(arr_1, arr_2)).toBe("number");
    });

    test("addIt for the example arrays returns 627", () => {
        expect(addIt(arr_1, arr_2)).toBe(627);
    })

    test("addIt for two arrays of different sizes", () => {
        let small = [3, 5, 22, 5,  7,  2]; 
        let big = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
        expect(addIt(small, big)).toBe(395);
    })
})

describe("capitalizeAll tests", () => {
    test("capitalizeAll returns a string", () => {
        expect(typeof capitalizeAll("hello", "e")).toBe("string");
    });

    test("capitalizeAll returns all o's capitalized", () => {
        expect(capitalizeAll("cool", "o")).toBe("cOOl");
    });

    test("capitalizeAll returns all i's capitalized", () => {
        expect(capitalizeAll("coding is fun", "i")).toBe("codIng Is fun");
    });

    test("capitalizeAll returns same string if leter is not found", () => {
        expect(capitalizeAll("multiverse", "Z")).toBe("multiverse");
    });
})

describe("cleanUp tests", () => {
    let exampleArr = [1, '2', 'three', false, undefined, null];
    test("cleanUp returns an array", () => {
        expect(Array.isArray(cleanUp(exampleArr))).toBe(true);
    });

    test('should leave empty arrays alone', () => {
        expect(cleanUp([])).toEqual([]);
    });
    
    test('should clean up an array', () => {
        expect(cleanUp(exampleArr).sort()).toEqual([1, 2, 0, 0].sort())
    });
})

describe('Big Words', () => {
    
    test('should remove words bigger than or equal to average', () => {
        expect(bigWords(['i', 'am', 'soo', 'hungry'])).toEqual(['soo', 'hungry']);
    })
  
    test('should return all instances', () => {
        expect(bigWords(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])
    })
  
    test('should work when the average is decimal', () => {
        expect(bigWords(['i', 'own', 'cheese'])).toEqual(['cheese'])
    })
  
})

describe('Unduplicate', () => {

    test("should return an array", () => {
        expect(Array.isArray(unduplicate([1, 2, 2, 3]))).toBe(true);
    });

    test('should remove duplicates', () => {
        expect(unduplicate([1, 2, 2, 3])).toEqual([1, 2, 3]);
    })
  
    test('should not remove different types', () => {
        expect(unduplicate([1, 2, '2', 3])).toEqual([1, 2, '2', 3]);
    })
  
})