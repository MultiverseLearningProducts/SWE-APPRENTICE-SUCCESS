import { Animal, Pig, Cow, Chicken } from './index.js';

describe("Animal class", () => {
  let animal;

  beforeEach(() => {
    animal = new Animal();
  });

  it("should extend from Animal class", () => {
    expect(animal).toBeInstanceOf(Animal);
  });

  it("should have a makeNoise() method", () => {
    expect(animal.makeNoise).toBeDefined();
  });
});

describe("Pig class", () => {
  let pig;

  beforeEach(() => {
    pig = new Pig();
  });

  it("should extend from Animal class", () => {
    expect(pig).toBeInstanceOf(Animal);
  });

  it("should have a makeNoise() method with the value 'oink'", () => {
    expect(pig.makeNoise()).toEqual("oink");
  });
});

describe("Cow class", () => {
  let cow;

  beforeEach(() => {
    cow = new Cow();
  });

  it("should extend from Animal class", () => {
    expect(cow).toBeInstanceOf(Animal);
  });

  it("should have a makeNoise() method with the value 'moo'", () => {
    expect(cow.makeNoise()).toEqual("moo");
  });
});

describe("Chicken class", () => {
  let chicken;

  beforeEach(() => {
    chicken = new Chicken();
  });

  it("should extend from Animal class", () => {
    expect(chicken).toBeInstanceOf(Animal);
  });

  it("should have a makeNoise() method with the value 'cluck'", () => {
    expect(chicken.makeNoise()).toEqual("cluck");
  });
});
