import request from 'supertest';
import app, { GET_POPULAR_SONGS } from './app';

describe('Popular songs query', () => {
  it('should retrieve the top n most popular songs, along with their play count and the name of the album they are from', async () => {
    const response = await request(app)
        .post('/graphql')
        .set('Accept', 'application/json')
        .send({
          query: GET_POPULAR_SONGS,
          variables: { n: 3 },
        });

    expect(response.body.errors).toBeUndefined();
    expect(response.status).toBe(200);

    // check the response
    expect(response.body.data.popularSongs).toEqual([
      {
        title: 'Rockin\' Robots',
        playCount: 1000000,
        album: 'Robo Riffs'
      },
      {
        title: 'Electric Love',
        playCount: 950000,
        album: 'Robot Heartbreak'
      },
      {
        title: 'Metallic Dreams',
        playCount: 900000,
        album: 'Heavy Metal Robots'
      }
    ]);
  });
});
