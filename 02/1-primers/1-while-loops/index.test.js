import { default as variables } from './index.js';
const { 
  sumToN,
  batman,
  addEvenOnly
} = variables;

describe('sumToN', () => {
    it("should return a number", () => {
      expect(typeof sumToN(2)).toBe('number');
    });
  
    it("returns the value 3 for sumToN(2)", () => {
        expect(sumToN(2)).toBe(3);
    });

    it("returns the value 15 for sumToN(5)", () => {
        expect(sumToN(5)).toBe(15);
    });

    it("returns the value 0 for any value less than 1", () => {
        expect(sumToN(-1)).toBe(0);
    });
}); 

describe("batman", () => {

    it('returns a string', () => {
        expect(typeof batman(2)).toBe('string');
    });

    it('returns the string Batman! without a space for n less than 1', () => {
        expect(batman(0)).toBe("Batman!");
    });

    it("adds the specified number of n to the string", () => {
        expect(batman(2)).toBe("NaNa Batman!");
    });
})

describe("addEvenOnly", () => {

    it('returns a number', () => {
        expect(typeof addEvenOnly(2)).toBe('number');
    });

    it('returns 0 for a number less than 1', () => {
        expect(addEvenOnly(-5)).toBe(0);
    });

    it('returns 6 for a n value of 4', () => {
        expect(addEvenOnly(4)).toBe(6);
    });

    it('returns 30 for a n value of 10', () => {
        expect(addEvenOnly(10)).toBe(30);
    })
})