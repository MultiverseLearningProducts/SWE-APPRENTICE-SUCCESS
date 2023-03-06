import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

/* 
The robots in the rock band want to be able to find out which of their songs are the most popular among their fans. They want you to write a GraphQL query that retrieves the top n most popular songs, where n is a variable that can be passed in as an argument.

Write a GraphQL query that retrieves the top n most popular songs, along with their play count and the name of the album they are from.

You can assume that there is already a resolver function that will return an array of Song objects with the correct data.
*/

export const GET_POPULAR_SONGS = `
  # 👇👇👇 YOUR QUERY HERE






  
  # 👆👆👆 YOUR QUERY HERE
`;

// data
const songs = [
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
`);

// Define resolver
const root = {
  popularSongs: ({ n }) => {
    const sortedSongs = songs.sort((a, b) => b.playCount - a.playCount);
    return sortedSongs.slice(0, n);
  },
};

// Set up GraphQL server
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

export default app;
