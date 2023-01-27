import { default as variables } from './index.js';

const { 
    doubles,
    smallNums,
    coders,
    evens,
    odds,
    longNames,
    containsC,
    total,
    story,
    oldPeople,
    nicknames,
    highPerformers,
    counts
} = variables;

describe("doubles tests", () => {
    let nums = [3, 10, 1, 25];
    test("doubles is an array", () => {
        expect(Array.isArray(doubles)).toBe(true);
    })

    test("doubles array returns array that is double nums", () => {
        expect(doubles).toEqual([6, 20, 2, 50]);
    })
})

describe("smallNums tests", () => {
    let bigNumbers = [100, 200, 300, 1000, 525600]
    test("smallNums is an array", () => {
        expect(Array.isArray(smallNums)).toBe(true);
    })

    test("smallNums array returns array that contains values that are half the bigNumbers array", () => {
        expect(smallNums).toEqual([50, 100, 150, 500, 262800]);
    })
})

describe("coders tests", () => {
    let names = ['Yadira', 'Kadiatou', 'Isaiah', 'Fancisco', 'Darius'];
    test("coders is an array", () => {
        expect(Array.isArray(coders)).toEqual(true);
    })

    test("coders contains 'is a coder' added to each name", () => {
        expect(coders).toEqual(['Yadira is a coder', 'Kadiatou is a coder', 'Isaiah is a coder', 'Fancisco is a coder', 'Darius is a coder']);
    })
})

describe("evens and odds tests", () => {
    test("both evens and odds are arrays", () => {
        expect(Array.isArray(evens)).toEqual(true);
        expect(Array.isArray(odds)).toEqual(true);
    })

    test("evens contains only even values", () => {
        expect(evens.sort()).toEqual([0, 2, 4, 6, 8, 10].sort());
        expect(odds.sort()).toEqual([1, 3, 5, 7, 9].sort());
    })
})

describe("superheros tests", () => {
    test("both longNames and containsC are arrays", () => {
        expect(Array.isArray(longNames)).toEqual(true);
        expect(Array.isArray(containsC)).toEqual(true);
    })

    test("longNames contains only superheros that have more than 10 characters in their name", () => {
        expect(longNames.sort()).toEqual([ 'Black Panther', 'Wonder Woman', 'Captain Marvel'].sort());
    })

    test("contains C contains only superheros with c in their name (case insensitive", () => {
        expect(containsC.sort()).toEqual([ 'Black Panther', 'Captain Marvel' ].sort());
    })
})

describe("total reducer tests", () => {
    test("total contains a number", () => {
        expect(typeof total).toEqual('number');
    })

    test("total contains the correct value", () => {
        expect(total).toEqual(55);
    })
})

describe("story reducer tests", () => {
    test("story contains a string", () => {
        expect(typeof story).toEqual('string');
    })

    test("story contains the correct value", () => {
        expect(story).toEqual("a long time ago in a galaxy far far away");
    })
})

describe("oldPeople  tests", () => {
    test("oldPeople is an array", () => {
        expect(Array.isArray(oldPeople)).toEqual(true);
    })

    test("old people contains only people older than 25", () => {
        expect(oldPeople[0].age > 25).toBe(true);
        expect(oldPeople[1].age > 25).toBe(true);
        expect(oldPeople[2].age > 25).toBe(true);
    })
})


describe("nicknames tests", () => {
    test("nicknames is an object", () => {
        expect(typeof nicknames).toEqual('object');
    })

    test("nicknames contains key value pairs of name/nickname", () => {
        expect(nicknames).toEqual(
        {
          Yadira: 'Deary',
          Kadiatou: 'Kadi-B',
          Isaiah: 'Izzy',
          Fancisco: 'Paco',
          Darius: 'DRock'
        });
    })
})

describe("highPerformers tests", () => {
    test("highPerformers is an array", () => {
        expect(Array.isArray(highPerformers)).toEqual(true);
    })

    test("highPerformers has values only student(s) with averages above 90", () => {
        expect(highPerformers[0].name === "Charlie" || highPerformers[0].name === "David").toEqual(true)
    })
})

describe("counts tests", () => {
    test("counts is an objects", () => {
        expect(typeof counts).toEqual('object');
    })

    test("counts contains the correct values", () => {
        expect(counts).toEqual({ a: 1, b: 1, c: 2, d: 2, f: 2, g: 1 })
    })
})