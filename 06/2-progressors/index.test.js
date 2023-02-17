import { db } from './db';
import { Potion, Ingredient } from './9-sequelize-class-methods';

describe('Wizard', () => {
  
  afterAll(async () => {
    await db.close();
  });
  
  describe('Class Methods', () => {
    beforeAll(async () => {
      // connect to and rebuild the db
      await db.sync({force: true});
  
      const mandrakeElixir = await Potion.create({
        name: 'Mandrake Elixir',
      });
      await Ingredient.create({
        name: 'wormwood',
        potionId: mandrakeElixir.id,
      });
      await Ingredient.create({
        name: 'mandrake root',
        potionId: mandrakeElixir.id,
      });
  
      const poltergeistPotion = await Potion.create({
        name: 'Poltergeist Potion',
      });
      await Ingredient.create({
        name: 'ghost pepper',
        potionId: poltergeistPotion.id,
      });
      await Ingredient.create({
        name: 'ectoplasm',
        potionId: poltergeistPotion.id,
      });
      await Ingredient.create({
        name: 'slime mold',
        potionId: poltergeistPotion.id,
      });
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
