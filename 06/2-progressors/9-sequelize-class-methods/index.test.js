import { db } from '../db';
import { Potion, Ingredient } from '.';

describe('Wizard', () => {
  
  afterAll(async () => {
    await db.close();
  });
  
  describe('Class Methods', () => {
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
    });
  
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
    
});
