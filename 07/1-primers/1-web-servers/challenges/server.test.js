import request from 'supertest';
import app from './server';

describe('GET /', () => {

  it('should return a 200 status code', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
  it('should return HTML', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8', done);
  });

  it('should return the welcome message', (done) => {
    request(app)
      .get('/')
      .expect(/Welcome to the Fantasy Creatures Collection!/, done);
  });

  it('should return links to the creatures', (done) => {
    request(app)
      .get('/')
      .expect(/<a href="\/dragons.html">Dragons<\/a>/)
      .expect(/<a href="\/unicorns.html">Unicorns<\/a>/)
      .expect(/<a href="\/griffins.html">Griffins<\/a>/)
      .end(done);
  });
});