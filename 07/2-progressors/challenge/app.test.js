import request from 'supertest';
import jest from 'jest-mock';
import app from './app';
import { db, NobleHouse, Guest } from './db';
import { nobleHouses, guests } from './seedData';

describe('Royal API', () => {
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
    await db.close();
  });

  describe('Query Parameters - GET /guests', () => {
    

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

  describe('Server Side Validation - POST /guests', () => {
    it('should create a new guest with valid input', async () => {
      const guest = {
        name: 'Sir Lancelot',
        age: 30,
        occupation: 'Knight',
        status: 'Single'
      };

      const response = await request(app)
        .post('/guests')
        .send(guest)
        .expect(200);

      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(guest.name);
      expect(response.body.age).toBe(guest.age);
      expect(response.body.occupation).toBe(guest.occupation);
      expect(response.body.status).toBe(guest.status);

      // Ensure guest was actually saved to the database
      const dbGuest = await Guest.findByPk(response.body.id);
      expect(dbGuest).not.toBeNull();
      expect(dbGuest.name).toBe(guest.name);
      expect(dbGuest.age).toBe(guest.age);
      expect(dbGuest.occupation).toBe(guest.occupation);
      expect(dbGuest.status).toBe(guest.status);
    });

    it('should return a 400 error with invalid input', async () => {
      const guest = {
        age: 'not a number',
        occupation: '',
        status: 'married'
      };

      const response = await request(app)
        .post('/guests')
        .send(guest)
        .expect(400);

      expect(response.body.errors).toBeTruthy();
    });
  });

});
