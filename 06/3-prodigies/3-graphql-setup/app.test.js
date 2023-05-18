import request from 'supertest';
import app from './app';

describe('Rocket price', () => {
  test('Returns the price of the rocket', async () => {
    const query = `
      query {
        rocket(id: "1") {
          id
          name
          description
          price
        }
      }
    `;

    const response = await request(app)
      .post('/graphql')
      .send({ query });

    // check for errors
    expect(response.body.errors).toBeUndefined();
    expect(response.status).toBe(200);
    expect(response.body.data.rocket.price).toBeDefined();
    expect(typeof response.body.data.rocket.price).toBe('number');
  });
});
