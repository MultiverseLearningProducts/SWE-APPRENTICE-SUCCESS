import { default as variables } from './index.js';
const { 
    excludeNum,
    noVowels,
    magicLetter,
    createPyramid
} = variables;

describe("excludeNum tests", () => {
    test("should return a string", () => {
        expect(typeof excludeNum(2)).toBe("string");
    });

    test("excludeNum 2", () => {
        expect(excludeNum(2)).toBe("1 3 4 5 6 7 8 9 10");
    });

    test("excludeNum 10 does not have trailing space on the 9", () => {
        expect(excludeNum(10)).toBe("1 2 3 4 5 6 7 8 9");
    });
})

describe("noVowles tests", () => {
    test("should return a string", () => {
        expect(typeof noVowels("Multiverse")).toBe("string");
    });

    test("noVowels for teh string 'multiverse'", () => {
        expect(noVowels("multiverse")).toBe("mltvrs");
    });
    test("noVowels for the string Bootcamp returns a capital B", () => {
        expect(noVowels("Bootcamp")).toBe("Btcmp");
    });
})

describe("magicLetter tests", () => {
    test("should return a string", () => {
        expect(typeof magicLetter("Multiverse", "i")).toBe("string");
    });

    test("magicLetter for the string 'coding'", () => {
        expect(magicLetter("coding", "d")).toBe("co");
    });

    test("magicLetter is case sensitive", () => {
        expect(magicLetter("hEllo", "E")).toBe("h");
    });

    test("returns full string if the magic letter is not present", () => {
        expect(magicLetter("Loops", "z")).toBe("Loops");
    });
})

describe("createPyramid tests", () => {
    test("should return a string", () => {
        expect(typeof createPyramid(2)).toBe("string");
    });

    test("returns a pyramid of 2 levels", () => {
        expect(createPyramid(2)).toBe("*\n**\n");
    });

    test("returns a pyramid of 5 levels", () => {
        expect(createPyramid(5)).toBe("*\n**\n***\n****\n*****\n");
    });

})