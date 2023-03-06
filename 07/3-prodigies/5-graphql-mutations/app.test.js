import request from 'supertest';
import app, { ADD_SONG, songs } from './app';

describe('addSongs mutation', () => {
  it('should add a new song to the list of songs', async () => {
    const response = await request(app)
        .post('/graphql')
        .set('Accept', 'application/json')
        .send({
          query: ADD_SONG,
        });

    expect(response.body.errors).toBeUndefined();
    expect(response.status).toBe(200);

    // check the response
    expect(response.body.data.addSong).toEqual({
      title: 'New Song',
      playCount: 100,
      album: 'New Album'
    });

    // check the songs array
    expect(songs).toContainEqual({
      title: 'New Song',
      playCount: 100,
      album: 'New Album'
    });
  });
});
