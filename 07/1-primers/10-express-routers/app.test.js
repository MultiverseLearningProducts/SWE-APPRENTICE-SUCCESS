import request from 'supertest';
import app from './app';
import creatures from './db';

describe('Mythical Creatures ROUTERS API', () => {
  describe('GET /creatures', () => {
    it('responds with a json object of all creatures', async () => {
      const response = await request(app).get('/creatures');
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(creatures.length);
      expect(response.body[0].name).toBe(creatures[0].name);
    });
  });
  describe('GET /creatures/:name', () => {
    it('responds with a json object of the creature with the given name', async () => {
      const response = await request(app).get('/creatures/Saphira');
      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Saphira');
    });
  })
});
