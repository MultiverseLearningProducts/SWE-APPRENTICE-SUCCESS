import { Animal, Pig, Cow, Chicken } from './index.js';

describe("Animal class", () => {
  let animal;

  beforeEach(() => {
    animal = new Animal();
  });

  it("should extend from Animal class", () => {
    expect(animal).toBeInstanceOf(Animal);
  });

  it("should have a sound property", () => {
    expect(animal.sound).toBeDefined();
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

  it("should have a sound property with the value 'Oink'", () => {
    expect(pig.sound).toEqual("Oink");
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

  it("should have a sound property with the value 'Moo'", () => {
    expect(cow.sound).toEqual("Moo");
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

  it("should have a sound property with the value 'Cluck'", () => {
    expect(chicken.sound).toEqual("Cluck");
  });
});
