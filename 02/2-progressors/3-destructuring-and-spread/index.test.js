import { default as variables } from './index.js';

const { 
    crab, bee, bear, bunny, dog,
    firstName, secondName,
    secondDog, thirdDog,
    happy, cry, rest,
    brand, model, type, year, color,
    emily, michael, jessica,
} = variables;

describe("emojis tests", () => {
    test("checking that each emoji is in the correct variable", () => {
        expect(crab).toBe("🦀")
        expect(bee).toBe("🐝")
        expect(bear).toBe("🐻")
        expect(bunny).toBe("🐰")
        expect(dog).toBe("🐶")
    })
})

describe("names tests", () => {
    test("testing firstName and lastName for the correct values", () => {
        expect(firstName).toBe("Henry");
        expect(secondName).toBe("Amy");
    })
})

describe("dog tests", () => {
    test("testing secondDog and thirdDog for the correct values", () => {
        expect(secondDog).toBe("Bella");
        expect(thirdDog).toBe("Charlie");
    })
})

describe("emotions destructuring", () => {
    test("testing that happy, cry, and rest have the correct values", () => {
        expect(happy).toBe("😀");
        expect(cry).toBe("😂");
        expect(rest).toEqual([ '😇', '😱', '😵', '🫡', '🫠']);
    })
})


describe("myCar object destructuring", () => {
    test("checking myCar values", () => {
        expect(brand).toBe("Ford");
        expect(year).toBe(2021);
    })
})

describe("nested object destructuring", () => {
    test("checking variable values", () => {
        expect(emily).toEqual("Emily Johnson");
        expect(michael).toEqual("Michael Brown");
        expect(jessica).toEqual("Jessica Davis");
    })
})