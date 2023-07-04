import {
  favoriteVegetable,
  livingDinosaur,
  favoriteCountry,
  birthYear,
  isCool,
} from "./index.js";

// undefined
describe("`favoriteVegetable` constant", () => {
  it("should be undefined", () => {
    expect(favoriteVegetable).toBeUndefined();
  });
});

// null
describe("`livingDinosaur` constant", () => {
  it("should be null", () => {
    expect(livingDinosaur).toBeNull();
  });
});

// string
describe("`favoriteCountry` string", () => {
  // test to confirm variable is defined
  it("is defined", () => {
    expect(favoriteCountry).toBeDefined();
  });

  // test to confirm data type
  it("is a string", () => {
    expect(typeof favoriteCountry).toBe("string");
  });
});

// number
describe("`birthYear` number", () => {
  // test to confirm variable is defined
  it("is defined", () => {
    expect(birthYear).toBeDefined();
  });

  // test to confirm data type
  it("is a number", () => {
    expect(typeof birthYear).toBe("number");
  });
});

// boolean
describe("`isCool` boolean", () => {
  // test to confirm variable is defined
  it("is defined", () => {
    expect(isCool).toBeDefined();
  });

  // test to confirm data type
  it("is a boolean", () => {
    expect(typeof isCool).toBe("boolean");
  });
});
