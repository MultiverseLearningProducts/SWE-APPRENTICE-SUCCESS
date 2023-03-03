import request from 'supertest';
import jest from 'jest-mock';
import app from './app';
import { db, NobleHouse, Guest } from './db';
import { nobleHouses, guests } from './seedData';

describe('Royal API', () => {

  describe('GET /guests', () => {
    beforeAll(async () => {
      await db.sync({ force: true });
      await Guest.bulkCreate([
        { name: 'Jon Snow', age: 22, occupation: 'King in the North', status: 'Alive' },
        { name: 'Daenerys Targaryen', age: 25, occupation: 'Queen of the Seven Kingdoms', status: 'Alive' },
        { name: 'Tyrion Lannister', age: 40, occupation: 'Hand of the Queen', status: 'Alive' },
        { name: 'Cersei Lannister', age: 42, occupation: 'Queen of the Seven Kingdoms', status: 'Alive' },
        { name: 'Joffrey Baratheon', age: 18, occupation: 'King of the Seven Kingdoms', status: 'Deceased' },
        { name: 'Tywin Lannister', age: 63, occupation: 'Lord of Casterly Rock', status: 'Deceased' },
      ]);
    });

    afterAll(async () => {
      await db.sequelize.close();
    });

    it('should return all guests', async () => {
      const response = await request(app).get('/guests');
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(6);
    });

    it('should filter guests by age', async () => {
      const response = await request(app).get('/guests?age=40');
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(1);
      expect(response.body[0].name).toBe('Tyrion Lannister');
    });

    it('should filter guests by occupation', async () => {
      const response = await request(app).get('/guests?occupation=Queen%20of%20the%20Seven%20Kingdoms');
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(2);
      expect(response.body[0].name).toBe('Daenerys Targaryen');
      expect(response.body[1].name).toBe('Cersei Lannister');
    });

    it('should filter guests by status', async () => {
      const response = await request(app).get('/guests?status=Deceased');
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(2);
      expect(response.body[0].name).toBe('Joffrey Baratheon');
      expect(response.body[1].name).toBe('Tywin Lannister');
    });

    it('should return an empty array if no guests match the query', async () => {
      const response = await request(app).get('/guests?status=Unknown');
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(0);
    });
  });

});
