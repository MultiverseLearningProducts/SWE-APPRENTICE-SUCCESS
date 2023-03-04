import request from 'supertest';
import app from './app.js';

describe('Rockin Robots Dynamic HTTP Status Codes', () => {
  test('responds with a 403 status code and message', async () => {
    const payload = { code: 403, message: 'Access denied' };
    const response = await request(app)
      .post('/status')
      .send(payload)
      .expect(403)
      .expect('Content-Type', /json/)
    
    expect(response.body).toEqual(payload);
  });

  test('responds with a 200 status code and message', async () => {
    const payload = { code: 200, message: 'OK' };
    const response = await request(app)
      .post('/status')
      .send(payload)
      .expect(200)
      .expect('Content-Type', /json/)
    
    expect(response.body).toEqual(payload);
  });

  test('responds with a 400 status code and message', async () => {
    const payload = { code: 400, message: 'Not found' };
    const response = await request(app)
      .post('/status')
      .send(payload)
      .expect(400)
      .expect('Content-Type', /json/)
    
    expect(response.body).toEqual(payload);
  });
});
