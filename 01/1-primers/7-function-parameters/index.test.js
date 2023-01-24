import { default as variables } from './index.js';
const { subtract } = variables;

describe('subtract', () => {
  it('should be a function', () => {
    expect(typeof subtract).toBe('function');
  });

  it('should subtract two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(4, 2)).toBe(2);
    expect(subtract(2, 2)).toBe(0);
  });

  it('should work with negative numbers', () => {
    expect(subtract(5, -2)).toBe(7);
    expect(subtract(-5, 2)).toBe(-7);
    expect(subtract(-5, -2)).toBe(-3);
  });

});

