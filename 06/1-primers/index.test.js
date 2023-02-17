
import { Sequelize, DataTypes } from 'sequelize';
import { Wizard } from './4-sequelize-connection-model';

describe('Wizard', () => {
  let sequelize;

  beforeAll(async () => {
    // in-memory database just for testing,
    // to minimize confusing boilerplate files/code
    sequelize = new Sequelize('sqlite::memory:', { logging: false });
    // more or less connect to the db
    await sequelize.authenticate();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  describe('Model Definition', () => {
    beforeAll(async () => {
      // define the model in the database, based on the code written
      await Wizard.initialize(sequelize);
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
      await expect(Wizard.create({
        name: 'Ron Weasley',
        spell: 'Wingardium Leviosa',
        house: 'Gryffindor',
      })).rejects.toThrow();
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
});
