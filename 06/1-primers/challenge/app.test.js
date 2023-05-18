import request from 'supertest';
import jest from 'jest-mock';
import app from './app';
import { db, Creature } from './db';
import { creatures } from './seedData';

describe('Creatures API', () => {
  describe('GET /creatures', () => {
    beforeAll(async () => {
      await db.sync({ force: true });
      await Promise.all(creatures.map(creature => Creature.create(creature)));
    });
    it('responds with a json object of all creatures', async () => {
      const response = await request(app).get('/creatures');
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(9);
      expect(response.body[0].name).toBe('Smaug');
    });

    it('queries creatures from the database', async () => {
      const findAll = jest.spyOn(Creature, 'findAll');
      await request(app).get('/creatures');
      expect(findAll).toHaveBeenCalled();
      findAll.mockRestore();
    });

    it('responds with an error if the server encounters an error', async () => {
      const findAll = jest.spyOn(Creature, 'findAll');

      findAll.mockImplementation(() => {
        throw new Error();
      });

      const response = await request(app).get('/creatures');
      expect(response.status).toBe(500);
      findAll.mockRestore();
    });
  });


  describe('GET /creatures/:id', () => {
    beforeAll(async () => {
      await db.sync({ force: true });
    });
    it('should return a specific creature by ID', async () => {
      const creature = await Creature.create({
        name: 'Smaug',
        type: 'dragon',
        color: 'red',
        location: 'mountains',
      });

      const response = await request(app).get(`/creatures/${creature.id}`);

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({
        name: 'Smaug',
        type: 'dragon',
        color: 'red',
        location: 'mountains',
      });
    });

    it('should return 404 if creature is not found', async () => {
      const response = await request(app).get('/creatures/123');

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'Creature not found' });
    });
  });

  describe('POST /creatures', () => {
    beforeAll(async () => {
      await db.sync({ force: true });
    });
    it('should add a new creature to the database', async () => {
      const newCreature = {
        name: 'Fluffy',
        type: 'unicorn',
        color: 'white',
        location: 'forest',
      };

      const response = await request(app).post('/creatures').send(newCreature);

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject(newCreature);
    });
  });

  describe('DELETE /creatures/:id', () => {
    beforeAll(async () => {
      await db.sync({ force: true });
    });
    it('should delete the creature and return a success message', async () => {
      const creature = await request(app)
        .post('/creatures')
        .send({ name: 'Test', type: 'TestType', color: 'TestColor', location: 'TestLocation' });

      const response = await request(app).delete(`/creatures/${creature.body.id}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBeTruthy();
    });

    it('should return a 404 status if the creature is not found', async () => {
      const response = await request(app).delete('/creatures/12345');

      expect(response.status).toBe(404);
      expect(response.body.message).toBe('Creature not found');
    });
  });

  describe('PUT /creatures/:id', () => {
    beforeAll(async () => {
      await db.sync({ force: true });
    });
    it('should update a creature in the database', async () => {
      const creature = await Creature.create({
        name: 'Smaug',
        type: 'dragon',
        color: 'red',
        location: 'mountains',
      });

      const updatedCreature = {
        name: 'Smaug',
        type: 'dragon',
        color: 'red',
        location: 'underground',
      };

      const response = await request(app)
        .put(`/creatures/${creature.id}`)
        .send(updatedCreature);

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject(updatedCreature);
    });
    it('should return 404 if creature is not found', async () => {
      const response = await request(app).put('/creatures/123');

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'Creature not found' });
    });
  });
});
