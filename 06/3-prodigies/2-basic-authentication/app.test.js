import request from 'supertest';
import app, { users } from './app.js';

describe('Rockin Robots Basic Auth - GET /secret', () => {
  it('returns 401 Unauthorized when no credentials are provided', async () => {
    const response = await request(app).get('/secret');
    expect(response.status).toBe(401);
    expect(response.text).toBe('Unauthorized');
  });

  it('returns 401 Unauthorized when credentials are incorrect', async () => {
    // create base64 encoded string of 'rockfan:wrongpassword'
    const encoded = Buffer.from('rockfan:wrongpassword').toString('base64');
    const response = await request(app).get('/secret').set('Authorization', `Basic ${encoded}`);
    expect(response.status).toBe(401);
    expect(response.text).toBe('Unauthorized');
  });

  it('returns 200 OK when credentials are correct', async () => {
    // create base64 encoded string of 'rockfan:ilovebands'
    const encoded = Buffer.from('rockfan:ilovebands').toString('base64');
    const response = await request(app).get('/secret').set('Authorization', `Basic ${encoded}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome to the secret page!');
  });
});
