import { db } from '../db';
import { Patronus } from '.';

describe('Patronus', () => {
  
  afterAll(async () => {
    await db.close();
  });
  
  describe('beforeCreate hook', () => {
    beforeAll(async () => {
      // connect to and rebuild the db
      await db.sync({force: true});
    });

    test('should capitalize the first letter of the name property', async () => {
      const patronus = await Patronus.create({
        name: 'stag',
        animal: 'deer'
      });

      expect(patronus.name).toBe('Stag');
    });

    test('should handle an empty name property', async () => {
      const patronus = await Patronus.create({
        name: '',
        animal: 'dog'
      });

      expect(patronus.name).toBe('');
    });

    test('should handle a name property with only one letter', async () => {
      const patronus = await Patronus.create({
        name: 'z',
        animal: 'zebra'
      });

      expect(patronus.name).toBe('Z');
    });
  });
    
});
