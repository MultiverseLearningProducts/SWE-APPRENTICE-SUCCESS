import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

/* 
*/

export const ADD_SONG = `
  # 👇👇👇 YOUR MUTATION HERE
  





  
  # 👆👆👆 YOUR MUTATION HERE
`;

// data
export const songs = [
  {
    title: "Rockin' Robots",
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
  },
  {
    title: 'Circuit City Blues',
    playCount: 800000,
    album: 'Electric Soul'
  }
];

// Define schema
const schema = buildSchema(`
  type Song {
    title: String!
    playCount: Int!
    album: String!
  }

  type Query {
    popularSongs(n: Int!): [Song!]!
  }

  type Mutation {
    addSong(title: String!, playCount: Int!, album: String!): Song!
  }
`);

// Define resolver
const root = {
  addSong: ({ title, playCount, album }) => {
    const newSong = { title, playCount, album };
    songs.push(newSong);
    return newSong;
  }
};

// Set up GraphQL server
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

export default app;
