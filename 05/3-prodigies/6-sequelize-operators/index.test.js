import { db } from '../db';
import { Wand, getMostExpensiveWandByWood } from '.';

describe('Wand', () => {
  let wands = [];

  afterAll(async () => {
    await db.close();
  });
  
  describe('getMostExpensiveWandByWood function', () => {
    beforeAll(async () => {
      // connect to and rebuild the db
      await db.sync({force: true});

      try {
        
        wands = await Wand.bulkCreate([
          { wood: 'Oak', length: 12, price: 10 },
          { wood: 'Oak', length: 13, price: 12 },
          { wood: 'Maple', length: 12, price: 8 },
          { wood: 'Maple', length: 13, price: 15 },
          { wood: 'Walnut', length: 12, price: 11 },
          { wood: 'Walnut', length: 13, price: 13 },
        ]);
      } catch (error) {
        console.error(error)
      }
    });

    test('returns the most expensive wand for a given wood', async () => {
      const oakWand = await getMostExpensiveWandByWood('Oak');
      expect(oakWand.price).toBe(12);
      expect(oakWand.wood).toBe('Oak');
  
      const mapleWand = await getMostExpensiveWandByWood('Maple');
      expect(mapleWand.price).toBe(15);
      expect(mapleWand.wood).toBe('Maple');
  
      const walnutWand = await getMostExpensiveWandByWood('Walnut');
      expect(walnutWand.price).toBe(13);
      expect(walnutWand.wood).toBe('Walnut');
    });
  
    test('returns null when no wand with the given wood exists', async () => {
      const nonexistentWoodWand = await getMostExpensiveWandByWood('Cherry');
      expect(nonexistentWoodWand).toBeNull();
    });
  });
    
});
