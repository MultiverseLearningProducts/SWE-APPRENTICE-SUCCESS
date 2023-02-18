import { db } from '../db';
import { Potion, Ingredient } from '.';

describe('Potion', () => {
  
  afterAll(async () => {
    await db.close();
  });
  
  describe('Instance Methods', () => {
    let potion;
  
    beforeAll(async () => {
      // connect to and rebuild the db
      await db.sync({force: true});
      
      potion = await Potion.create({
        name: 'Polyjuice Potion',
        price: 10.99,
        quantity: 3
      });
    });
  
    test('should calculate the total value of the potion', () => {
      expect(potion.getTotalValue()).toBeCloseTo(32.97);
    });
  
    test('should handle a potion with a quantity of 0', () => {
      potion.quantity = 0;
      expect(potion.getTotalValue()).toBe(0);
    });
  
    test('should handle a potion with a negative price', () => {
      potion.price = -5.99;
      potion.quantity = 3;
      expect(potion.getTotalValue()).toBeCloseTo(-17.97);
    });
  });

    
});
