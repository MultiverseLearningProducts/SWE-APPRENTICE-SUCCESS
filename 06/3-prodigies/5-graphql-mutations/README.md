![MV Logo](/logo.jpg)

# GraphQL - Mutations
You have learned about queries and now you want to learn about mutations. Mutations are used when you want to modify the data on the server. Let's see how we can use mutations in GraphQL.

In GraphQL, a mutation is a request made to modify the data on the server. We can think of mutations as "write" operations, whereas queries are "read" operations. A mutation request can be used to create, update or delete data. Mutations can be thought of as a counterpart to queries. In our Superhero data model, let's create a mutation to add a new superhero.

```js
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Mutation {
    addSuperhero(name: String!, superpower: String!, age: Int!): Superhero!
  }
`;

```
In this code snippet, we define a new mutation for adding a superhero. The mutation is named `addSuperhero` and takes in three arguments, `name`, `superpower`, and `age`, all of which are required. The mutation returns a `Superhero` type.

Let's implement the resolver for this mutation:

```js
import { Superhero } from '../models';

const resolvers = {
  Mutation: {
    addSuperhero: async (_, { name, superpower, age }) => {
      const superhero = await Superhero.create({ name, superpower, age });
      return superhero;
    },
  },
};

```

In the resolver, we receive the arguments passed in from the client as the second parameter, and we use them to create a new superhero in our database using Sequelize. We return the newly created superhero.

## #checkoutTheDocs 🔍
- [GraphQL Mutations](https://graphql.org/learn/queries/#mutations)
- [Apollo Server - Mutations](https://www.apollographql.com/docs/apollo-server/data/mutations/)

## Video Resources 🎥
- [GraphQL Mutations](https://www.youtube.com/watch?v=DU77lbBPfBI)
