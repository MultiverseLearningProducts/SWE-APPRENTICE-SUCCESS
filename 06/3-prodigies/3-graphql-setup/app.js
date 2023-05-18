import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

/* 
You've been tasked with updating the `Rocket` type in the GraphQL schema to include a new field called `price`, which represents the cost of the rocket. You also need to update the `rocket` resolver function to return this new field.
*/

// Define your schema
const schema = buildSchema(`
  type Rocket {
    id: ID!
    name: String!
    description: String
    # 👇👇👇 YOUR CODE for the price field 👇👇👇

  }

  type Query {
    rocket(id: ID!): Rocket
  }
`);

// Define your resolver
const root = {
  rocket: ({ id }) => {
    // Get the rocket with the specified ID
    // This is where you would normally make a database query
    const rocket = {
      id,
      name: 'Falcon 9',
      description: 'A two-stage rocket designed and manufactured by SpaceX',
      // 👇👇👇 YOUR CODE for the price field 👇👇👇

    };
    return rocket;
  }
};

// Set up your GraphQL server
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true // enable the GraphiQL UI
}));


export default app;
