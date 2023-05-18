import request from 'supertest';
import app, { creatures } from './server';

describe('GET /creatures', () => {
  it('should return a 200 status code', async () => {
    const response = await request(app).get('/creatures');
    expect(response.status).toBe(200);
  });

  it('should return JSON data', async () => {
    const response = await request(app).get('/creatures');
    expect(response.headers['content-type']).toMatch(/json/);
  });

  it('should return an array of creatures', async () => {
    const response = await request(app).get('/creatures');
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return the correct array of creatures', async () => {
    const response = await request(app).get('/creatures');
    expect(response.body).toMatchObject(creatures);
  });
});
