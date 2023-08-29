import { isFamous, isHot, gradeSystem, calculateDiscount, greetByTime } from "./index.js";

describe("isFamous", () => {
  it("returns true if the number of followers is greater than 100,000", () => {
    expect(isFamous(150000)).toBe(true);
    expect(isFamous(200000)).toBe(true);
  });
  it("returns false if the number of followers is less than 100,000", () => {
    expect(isFamous(50000)).toBe(false);
    expect(isFamous(100000)).toBe(false);
  });
});

describe("isHot", () => {
  it("returns hot if the temperature is greater than 30", () => {
    expect(isHot(35)).toBe("hot");
    expect(isHot(40)).toBe("hot");
  });
  it("returns not hot if the temperature is less than 30", () => {
    expect(isHot(25)).toBe("not hot");
    expect(isHot(30)).toBe("not hot");
    expect(isHot(20)).toBe("not hot");
  });
});


describe("gradeSystem", () => {
  it("returns A for score greater than or equal to 90", () => {
    expect(gradeSystem(95)).toBe("A");
    expect(gradeSystem(90)).toBe("A");
  });
  it("returns B for score greater than or equal to 80", () => {
    expect(gradeSystem(80)).toBe("B");
  });
  it("returns C for score greater than or equal to 70", () => {
    expect(gradeSystem(75)).toBe("C");
  });
  it("returns D for score greater than or equal to 60", () => {
    expect(gradeSystem(65)).toBe("D");
  });
  it("returns F for any score less than 60", () => {
    expect(gradeSystem(55)).toBe("F");
  });
});

describe("calculateDiscount", () => {
  it("returns discount amount for discount less than 50", () => {
    expect(calculateDiscount(100, 25)).toBe(75);
  });
  it("returns discount with additional 5% off for discount values greater than 50", () => {
    expect(calculateDiscount(100, 50)).toBe(45);
  });
});

describe("greetByTime", () => {
  it("returns 'Good morning!' for times between 5 and 12", () => {
    expect(greetByTime(10)).toBe("Good morning!");
  });
  it("returns 'Good afternoon!' for times between 12 and 18", () => {
    expect(greetByTime(15)).toBe("Good afternoon!");
  });
  it("returns 'Good evening!' for times between 18 and 23", () => {
    expect(greetByTime(20)).toBe("Good evening!");
  });
  it("returns 'Good night!' for times between 23 and 5", () => {
    expect(greetByTime(2)).toBe("Good night!");
  });
});

/*
greetByTime(10) should return "Good morning!"
greetByTime(15) should return "Good afternoon!"
greetByTime(20) should return "Good evening!"
greetByTime(2) should return "Good night!"
*/