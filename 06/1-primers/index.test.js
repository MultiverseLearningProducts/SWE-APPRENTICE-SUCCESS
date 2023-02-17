import { db } from './db';
import { Wizard } from './4-sequelize-connection-model';
import {
  createWizard,
  findWizard,
  deleteWizard,
  updateWizard,
} from './5-sequelize-crud';

describe('Wizard', () => {
  
  afterAll(async () => {
    await db.close();
  });
  
  describe('Model Definition', () => {
    beforeAll(async () => {
      // connect to and rebuild the db
      await db.sync({force: true});
    });

    test('should create a wizard with valid fields', async () => {
      const wizard = await Wizard.create({
        name: 'Harry Potter',
        spell: 'Expecto Patronum',
        power: 100,
        house: 'Gryffindor',
      });
      expect(wizard.id).not.toBeNull();
      expect(wizard.name).toEqual('Harry Potter');
      expect(wizard.spell).toEqual('Expecto Patronum');
      expect(wizard.power).toEqual(100);
      expect(wizard.house).toEqual('Gryffindor');
    });

    test('should throw an error if the wizard name is missing', async () => {
      await expect(Wizard.create({
        spell: 'Expelliarmus',
        power: 70,
        house: 'Gryffindor',
      })).rejects.toThrow();
    });

    test('should throw an error if the wizard spell is missing', async () => {
      await expect(Wizard.create({
        name: 'Hermione Granger',
        power: 95,
        house: 'Gryffindor',
      })).rejects.toThrow();
    });

    test('should throw an error if the wizard power is missing', async () => {
      const wizard = await Wizard.create({
        name: 'Ron Weasley',
        spell: 'Wingardium Leviosa',
        house: 'Gryffindor',
      });
      expect(wizard.power).toEqual(0);
    });

    test('should create a wizard with default house', async () => {
      const wizard = await Wizard.create({
        name: 'Luna Lovegood',
        spell: 'Sectumsempra',
        power: 80,
      });
      expect(wizard.house).toEqual('unsorted');
    });

    test('should create a wizard with default power', async () => {
      const wizard = await Wizard.create({
        name: 'Draco Malfoy',
        spell: 'Crucio',
        house: 'Slytherin',
      });
      expect(wizard.power).toEqual(0);
    });
  });
  describe('CRUD', () => {
    beforeAll(async () => {
      // connect to and rebuild the db
      await db.sync({force: true});
    });
    describe('createWizard', () => {
      test('should create a wizard with the given data', async () => {
        const wizardData = {
          name: 'Harry Potter',
          spell: 'Expecto Patronum',
          power: 100,
          house: 'Gryffindor',
        };
        const createdWizard = await createWizard(wizardData);
        expect(createdWizard.id).not.toBeNull();
        expect(createdWizard.name).toEqual(wizardData.name);
        expect(createdWizard.spell).toEqual(wizardData.spell);
        expect(createdWizard.power).toEqual(wizardData.power);
        expect(createdWizard.house).toEqual(wizardData.house);
      });
    });
  
    describe('findWizard', () => {
      test('should find a wizard with the given ID', async () => {
        const wizardData = {
          name: 'Hermione Granger',
          spell: 'Expelliarmus',
          power: 95,
          house: 'Gryffindor',
        };
        const createdWizard = await Wizard.create(wizardData);
        const foundWizard = await findWizard(createdWizard.id);
        expect(foundWizard.id).toEqual(createdWizard.id);
        expect(foundWizard.name).toEqual(wizardData.name);
        expect(foundWizard.spell).toEqual(wizardData.spell);
        expect(foundWizard.power).toEqual(wizardData.power);
        expect(foundWizard.house).toEqual(wizardData.house);
      });
  
      test('should return null if wizard not found', async () => {
        const foundWizard = await findWizard(123);
        expect(foundWizard).toBeNull();
      });
    });

    describe('deleteWizard', () => {
      test('should delete a wizard with the given ID', async () => {
        const wizardData = {
          name: 'Ron Weasley',
          spell: 'Wingardium Leviosa',
          power: 80,
          house: 'Gryffindor',
        };
        const createdWizard = await Wizard.create(wizardData);
        const numDeleted = await deleteWizard(createdWizard.id);
        expect(numDeleted).toEqual(1);
        const foundWizard = await findWizard(createdWizard.id);
        expect(foundWizard).toBeNull();
      });
  
      test('should return 0 if wizard not found', async () => {
        const numDeleted = await deleteWizard(123);
        expect(numDeleted).toEqual(0);
      });
    });
  
    describe('updateWizard', () => {
      test('should update a wizard with the given data', async () => {
        const wizardData = {
          name: 'Luna Lovegood',
          spell: 'Stupefy',
          power: 70,
          house: 'Ravenclaw',
        };
        const createdWizard = await Wizard.create(wizardData);
        const updatedData = {
          name: 'Ginny Weasley',
          spell: 'Expelliarmus',
          power: 90,
          house: 'Gryffindor',
        };
        const updatedWizard = await updateWizard(createdWizard.id, updatedData);
        expect(updatedWizard.id).toEqual(createdWizard.id);
        expect(updatedWizard.name).toEqual(updatedData.name);
        expect(updatedWizard.spell).toEqual(updatedData.spell);
        expect(updatedWizard.power).toEqual(updatedData.power);
        expect(updatedWizard.house).toEqual(updatedData.house);
      });
    });
  });
  describe('Associations - getWizardWithOwls', () => {
    beforeAll(async () => {
      // connect to and rebuild the db
      await db.sync({force: true});
      await Wizard.create({
        name: 'Harry Potter',
        spell: 'Expecto Patronum',
        power: 10,
        house: 'Gryffindor',
      });
      await Wizard.create({
        name: 'Hermione Granger',
        spell: 'Wingardium Leviosa',
        power: 9,
        house: 'Gryffindor',
      });
      await Owl.create({
        name: 'Hedwig',
        species: 'Snowy Owl',
        age: 5,
        wizardId: 1,
      });
      await Owl.create({
        name: 'Crookshanks',
        species: 'Half-Kneazle',
        age: 3,
        wizardId: 2,
      });
    });

    test('returns the wizard with the provided ID and their owls', async () => {
      const result = await getWizardWithOwls(1);
      expect(result.id).toBe(1);
      expect(result.name).toBe('Harry Potter');
      expect(result.spell).toBe('Expecto Patronum');
      expect(result.power).toBe(10);
      expect(result.house).toBe('Gryffindor');
      expect(Array.isArray(result.owls)).toBe(true);
      expect(result.owls.length).toBe(1);
      expect(result.owls[0].id).toBe(1);
      expect(result.owls[0].name).toBe('Hedwig');
      expect(result.owls[0].species).toBe('Snowy Owl');
      expect(result.owls[0].age).toBe(5);
      expect(result.owls[0].wizardId).toBe(1);
    });
  
    test('returns the wizard with the provided ID and no owls if the wizard has no owls', async () => {
      const result = await getWizardWithOwls(2);
      expect(result.id).toBe(2);
      expect(result.name).toBe('Hermione Granger');
      expect(result.spell).toBe('Wingardium Leviosa');
      expect(result.power).toBe(9);
      expect(result.house).toBe('Gryffindor');
      expect(Array.isArray(result.owls)).toBe(true);
      expect(result.owls[0].name).toBe('Crookshanks');
    });
  
    test('returns null if there is no wizard with the provided ID', async () => {
      const result = await getWizardWithOwls(3);
      expect(result).toBeNull();
    });


  });
});
