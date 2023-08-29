import { isTooMuch, isWeekend, sumOfSquares, findMax, reverseString } from "./index.js";

describe("isTooMuch", () => {
  it("returns false if amount is greater than the limit", () => {
    expect(isTooMuch(5, 10)).toBe(false);
    expect(isTooMuch(0, 10)).toBe(false);
  });
  it("returns true if amount not greater than the limit", () => {
    expect(isTooMuch(15, 10)).toBe(true);
    expect(isTooMuch(15, 0)).toBe(true);
  });
});


describe("isWeekend", () => {
  it("returns true for days that are not the weekend", () => {
    expect(isWeekend("Monday")).toBe(false);
    expect(isWeekend("Thursday")).toBe(false);
  });
  it("returns true for days that are the weekend", () => {
    expect(isWeekend("Saturday")).toBe(true);
    expect(isWeekend("Sunday")).toBe(true);
  });
});


describe("sumOfSquares", () => {
  it("returns a number", () => {
    expect(typeof sumOfSquares(2, 2)).toBe("number")
  })
  it("returns correct value", () => {
    expect(sumOfSquares(2, 2)).toBe(8);
    expect(sumOfSquares(3, 4)).toBe(25);
  });
});

describe("findMax", () => {
  it("returns a number", () => {
    expect(typeof findMax(2, 4)).toBe("number")
  })
  it("returns correct value", () => {
    expect(findMax(2, 25)).toBe(25);
    expect(findMax(22, 22)).toBe(22);
  });
});

describe("reverseString", () => {
  it("returns a string", () => {
    expect(typeof reverseString("hello")).toBe("string")
  })
  it("returns hello reversed", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  it("returns coding reversed", () => {
    expect(reverseString("coding")).toBe("gnidoc");
  });
});