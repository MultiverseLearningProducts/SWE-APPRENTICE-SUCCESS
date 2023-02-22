![MV Logo](/logo.jpg)
# GraphQL - Intro to the Concept and Initial Setup## 🚀 A Rocket Factory
Imagine that you work at a rocket factory, and you need to build an API that will allow customers to view information about your rockets. You could use a RESTful API, but you might find it difficult to design an API that is flexible enough to accommodate all the different types of data that customers might want to see. That's where GraphQL comes in.

GraphQL is a query language for APIs that allows you to define the shape and structure of the data you want to receive. Instead of making multiple requests to different endpoints to get the information you need, you can use a single GraphQL query to retrieve all the data you want.

To get started with GraphQL, you'll need to set up a GraphQL server. There are multiple options for graphql setup packages, but here's an example using the `express-graphql` package:

```js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Define your schema
const schema = buildSchema(`
  type Rocket {
    id: ID!
    name: String!
    description: String
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
    const rocket = { id, name: 'Falcon 9', description: 'A two-stage rocket designed and manufactured by SpaceX' };
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

app.listen(3000, () => console.log('Server started on port 3000'));

```

In this example, we're defining a `Rocket` type and a `Query` type in our schema. The `Rocket` type has an `id`, a `name`, and a `description`. The `Query` type has a single resolver function that takes an `id` parameter and returns a `Rocket` object with the specified ID.

We're then creating a `root` object with a resolver function for the `rocket` query. This function returns a hard-coded `Rocket` object for now, but in a real-world scenario, you would use a database query to retrieve the data.

Finally, we're setting up an Express app and using the `express-graphql` package to create a GraphQL endpoint at `/graphql`. We're passing in our schema and root object, as well as enabling the GraphiQL UI for testing our queries.

## #checkoutTheDocs 🔍
- [GraphQL.org](https://graphql.org/)
- [express-graphql](https://github.com/graphql/express-graphql)

## 🎥 Video Resources
- [GraphQL Explained in 100 Seconds](https://www.youtube.com/watch?v=eIQh02xuVw4)
