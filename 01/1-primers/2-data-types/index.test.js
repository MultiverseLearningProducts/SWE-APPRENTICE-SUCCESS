import { default as variables } from './index.js';
const { 
  favoriteVegetable,
  livingDinosaur,
  favoriteCountry,
  birthYear,
  isCool,
} = variables;

// undefined
describe('`favoriteVegetable` constant', () => {
  it('should be undefined', () => {
    expect(variables.favoriteVegetable).toBeUndefined();
  });
});

// null
describe('`livingDinosaur` constant', () => {
  it('should be null', () => {
    expect(variables.livingDinosaur).toBeNull();
  });
});

// string
describe('`favoriteCountry` string', () => {
  // test to confirm variable is defined
  it('is defined', () => {
    expect(variables.favoriteCountry).toBeDefined();
  });

  // test to confirm data type
  it('is a string', () => {
    expect(typeof variables.favoriteCountry).toBe('string');
  });
});

// number
describe('`birthYear` number', () => {
  // test to confirm variable is defined
  it('is defined', () => {
    expect(variables.birthYear).toBeDefined();
  });

  // test to confirm data type
  it('is a number', () => {
    expect(typeof variables.birthYear).toBe('number');
  });
});

// boolean
describe('`isCool` boolean', () => {
  // test to confirm variable is defined
  it('is defined', () => {
    expect(variables.isCool).toBeDefined();
  });

  // test to confirm data type
  it('is a boolean', () => {
    expect(typeof variables.isCool).toBe('boolean');
  });
});
