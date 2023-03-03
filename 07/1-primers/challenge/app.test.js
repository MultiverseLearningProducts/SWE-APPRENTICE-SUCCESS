import request from 'supertest';
import jest from 'jest-mock';
import app from './app';
import { db, Creature } from './db';
import { creatures } from './seedData';

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
