const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('should return the welcome message and links to the creatures', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(/Welcome to the Fantasy Creatures Collection!/)
      .expect(/<a href="\/dragons.html">Dragons<\/a>/)
      .expect(/<a href="\/unicorns.html">Unicorns<\/a>/)
      .expect(/<a href="\/griffins.html">Griffins<\/a>/)
      .end(done);
  });
});