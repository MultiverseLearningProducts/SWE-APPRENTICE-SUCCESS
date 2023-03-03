import { db } from '../db';
import { Potion, Ingredient } from '.';

describe('Potion', () => {
    let potion;
    beforeAll(async () => {
    // connect to and rebuild the db
    await db.sync({force: true});

    const mandrakeElixir = await Potion.create(
      {
        name: 'Mandrake Elixir',
        ingredients: [
          { name: 'wormwood' },
          { name: 'mandrake root' },
        ]
      },
      {
        include: Ingredient
      }
    );

    const potions = await Potion.findAll({
      include: Ingredient
    });
    

    const poltergeistPotion = await Potion.create(
      {
        name: 'Poltergeist Potion',
        ingredients: [
          { name: 'ghost pepper' },
          { name: 'ectoplasm' },
          { name: 'slime mold' },
        ]
      },
      {
        include: Ingredient
      }
    );
      
    potion = await Potion.create({
      name: 'Polyjuice Potion',
      price: 10.99,
      quantity: 3
    });
  });
  
  describe('Class Methods', () => {
  
    test('getIngredients returns the ingredients for a potion sorted alphabetically', async () => {
      const mandrakeElixirIngredients = await Potion.getIngredients('Mandrake Elixir');
      expect(mandrakeElixirIngredients).toEqual(['mandrake root', 'wormwood']);
  
      const poltergeistPotionIngredients = await Potion.getIngredients('Poltergeist Potion');
      expect(poltergeistPotionIngredients).toEqual(['ectoplasm', 'ghost pepper', 'slime mold']);
    });
  
    test('getIngredients returns an empty array if the potion does not exist', async () => {
      const nonexistentPotionIngredients = await Potion.getIngredients('Nonexistent Potion');
      expect(nonexistentPotionIngredients).toEqual([]);
    });
  });
  
  describe('Instance Methods', () => {
  
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
