import request from 'supertest';
import app from './app';
import creatures from './creatures';

describe('POST /creatures', () => {
  it('should add a new creature to the database', async () => {
    const newCreature = {
      name: 'Fluffy',
      type: 'unicorn',
      color: 'white',
      location: 'forest',
    };

    const response = await request(app).post('/creatures').send(newCreature);

    expect(response.body).toMatchObject(newCreature);
    expect(creatures).toContainEqual(newCreature);
  });
});
