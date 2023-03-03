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
  
    // const nobleHouses = [      { name: 'Stark', words: 'Winter is Coming' },      { name: 'Lannister', words: 'Hear Me Roar' },      { name: 'Targaryen', words: 'Fire and Blood' },      { name: 'Baratheon', words: 'Ours is the Fury' },      { name: 'Tyrell', words: 'Growing Strong' },      { name: 'Greyjoy', words: 'We Do Not Sow' },      { name: 'Martell', words: 'Unbowed, Unbent, Unbroken' },    ];
    
    await NobleHouse.bulkCreate(nobleHouses);
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

  describe('Pagination - GET /noblehouses', () => {
  
    it('GET /noblehouses returns the first page of noble houses with default page size', async () => {
      const res = await request(app).get('/noblehouses');
      expect(res.status).toBe(200);
      expect(res.body.page).toBe(1);
      expect(res.body.pageSize).toBe(10);
      expect(res.body.totalPages).toBe(1);
      expect(res.body.nobleHouses.length).toBe(nobleHouses.length);
      expect(res.body.nobleHouses[0].name).toBe(nobleHouses[0].name);
    });
  
    it('GET /noblehouses?page=2&pageSize=3 returns the second page of noble houses with page size of 3', async () => {
      const res = await request(app).get('/noblehouses?page=2&pageSize=3');
      expect(res.status).toBe(200);
      expect(res.body.page).toBe(2);
      expect(res.body.pageSize).toBe(3);
      expect(res.body.totalPages).toBe(Math.floor(nobleHouses.length / 3) + 1);
      expect(res.body.nobleHouses.length).toBe(3);
      expect(res.body.nobleHouses[0].name).toBe('House Baratheon');
    });
  
    it('GET /noblehouses?page=5 returns an empty list for page 5', async () => {
      const res = await request(app).get('/noblehouses?page=5');
      expect(res.status).toBe(200);
      expect(res.body.page).toBe(5);
      expect(res.body.pageSize).toBe(10);
      expect(res.body.totalPages).toBe(1);
      expect(res.body.nobleHouses.length).toBe(0);
    });
  });

  describe('GET /noblehouses/search', () => {
    it('It should return a list of houses sorted by id in ascending order', async () => {
      const response = await request(app).get('/noblehouses/search');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveLength(10);
      expect(response.body[0].id).toBe(1);
      expect(response.body[9].id).toBe(10);
    });
  
    it('It should return a list of houses sorted by name in ascending order', async () => {
      const response = await request(app).get('/noblehouses/search?sort=name');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveLength(10);
      expect(response.body[0].name).toBe('House Arryn');
      expect(response.body[4].name).toBe('House Lannister');
    });
  
    it('It should return a list of houses sorted by name in descending order', async () => {
      const response = await request(app).get('/noblehouses/search?sort=name&order=DESC');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveLength(10);
      expect(response.body[0].name).toBe('House Tyrell');
      expect(response.body[4].name).toBe('House Martell');
    });
  
    it('It should return a list of houses filtered by sigil', async () => {
      const response = await request(app).get('/noblehouses/search?sigil=blue');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveLength(3);
      expect(response.body[0].name).toBe('House Arryn');
      expect(response.body[1].name).toBe('House Tully');
    });
  
    it('It should return a list of houses filtered by words', async () => {
      const response = await request(app).get('/noblehouses/search?words=unbowed');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveLength(1);
      expect(response.body[0].name).toBe('House Martell');
    });
  
    it('It should return a list of houses filtered by sigil and words', async () => {
      const response = await request(app).get('/noblehouses/search?sigil=black&words=fire');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveLength(1);
      expect(response.body[0].name).toBe('House Targaryen');
    });
  });

  describe('404 Handling - catch-all middleware', () => {
    it('should return a 404 for an unknown route', async () => {
      const response = await request(app)
        .get('/unknown/route')
        .expect(404);
    });
  });

  describe('error handling middleware', () => {
    it('should return 500 for errors, with message `Mighty sorry old chap. Something has gone a pity wrong.`', async () => {
      const response = await request(app).get('/errorcheck');
  
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: 'Mighty sorry old chap. Something has gone a pity wrong.' });
  
      jest.spyOn(NobleHouse, 'findAll').mockRestore();
    });
  });
});
