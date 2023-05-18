# Bonus Round! 🔥 Other GraphQL Topics To Explore
## 1. Fragments
Fragments in GraphQL allow you to define reusable pieces of query syntax that can be included in multiple queries. This can be very useful for reducing duplication and making your queries more modular.

```js
import { gql } from 'apollo-server-express';

// define a fragment
const heroFragment = gql`
  fragment HeroDetails on Hero {
    name
    superpower
    age
  }
`;

// use the fragment in a query
const queryWithFragment = gql`
  query {
    allHeroes {
      ...HeroDetails
    }
  }
  ${heroFragment}
`;

```
### #checkoutTheDocs 🔍
- [GraphQL Fragments Docs](https://graphql.org/learn/queries/#fragments)

## 2. Subscriptions
Subscriptions in GraphQL allow you to subscribe to changes in the data on the server. Subscriptions are similar to queries in that they are sent to the server and the server responds with data. However, the key difference is that subscriptions are long-lived requests. This means that the server does not immediately send a response, but instead waits for a change in the data to send a response. This is useful for use cases such as real-time chat applications.

```js
import { gql } from 'apollo-server-express';

const SUBSCRIPTION_CREATED = 'SUBSCRIPTION_CREATED';

// not query, not mutation, but a subscription
const typeDefs = gql`
  type Subscription {
    heroCreated: Hero!
  }
`;

const resolvers = {
  Subscription: {
    heroCreated: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(SUBSCRIPTION_CREATED)
    }
  }
};

```
### #checkoutTheDocs 🔍
- [Apollo Subscriptions Docs](https://www.apollographql.com/docs/react/data/subscriptions/)

## 3. Interfaces
Interfaces in GraphQL allow you to define a set of fields that types must include when implementing the interface. This is useful for defining common fields across types. For example, in our Superhero data model, we have a `Hero` type and a `Villain` type. Both types have a `name` and `superpower` field. We can define an interface that both types must implement to ensure that they have these fields.

```js
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  interface Character {
    name: String!
    superpower: String!
  }

  type Hero implements Character {
    name: String!
    superpower: String!
    age: Int!
  }

  type Villain implements Character {
    name: String!
    superpower: String!
    weakness: String!
  }

  type Query {
    allCharacters: [Character!]!
  }
`;

const resolvers = {
  Character: {
    __resolveType(obj, context, info) {
      return obj.age ? 'Hero' : 'Villain';
    }
  },

  Query: {
    allCharacters: () => [
      { name: 'Batman', superpower: 'Rich', age: 50 },
      { name: 'Joker', superpower: 'Insanity', weakness: 'Bats' }
    ]
  }
};

```

### #checkoutTheDocs 🔍
- [GraphQL Interfaces Docs](https://graphql.org/learn/schema/#interfaces)
## 4. Custom Scalars
Custom scalars in GraphQL allow you to define your own scalar types. This is useful for defining types that are not natively supported by GraphQL. For example, in our Superhero data model, we have a `Hero` type that has a `birthDate` field. The `birthDate` field is a `Date` type, which is not natively supported by GraphQL. We can define a custom scalar type that will allow us to use the `Date` type in our schema.

```js
import { gql } from 'apollo-server-express';
import { GraphQLScalarType } from 'graphql';

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  }
});

const typeDefs = gql`
  scalar Date

  type Hero {
    name: String!
    birthDate: Date!
  }

  type Query {
    allHeroes: [Hero!]!
  }
`;

const resolvers = {
  Date: dateScalar,
  Query: {
    allHeroes: () => [
      { name: 'Superman', birthDate: new Date('1938-04-18') },
      { name: 'Spiderman', birthDate: new Date('1962-08-10') }
    ]
  }
};

```

### #checkoutTheDocs 🔍
- [GraphQL Custom Scalars Docs](https://graphql.org/learn/schema/#scalar-types)

## 5. Data Loaders
Data loaders in GraphQL allow you to batch and cache requests to your data sources. This can be useful for reducing the number of requests to your data sources and improving the performance of your GraphQL API. For example, in our Superhero data model, we have a `User` type that has a `friends` field. The `friends` field is an array of `User` types. If we were to query for a `User` and include the `friends` field, we would end up making a request to our data source for each friend. This can be very inefficient. We can use a data loader to batch these requests and only make a single request to our data source.

```js
import { DataLoader } from 'dataloader';

const batchUsers = async (userIds) => {
  const users = await User.findAll({ where: { id: userIds } });
  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
  return userIds.map((id) => userMap[id]);
};

const userLoader = new DataLoader(batchUsers);

// Later in your code
const user = await userLoader.load(123);

```

### #checkoutTheDocs 🔍
- [GraphQL Data Loaders Docs](https://github.com/graphql/dataloader#dataloader)

## 6. Introspection
Introspection in GraphQL allows you to query the schema of a GraphQL API at runtime. This can be useful for building tools that generate documentation, testing tools, or other tools that need to interact with a GraphQL API in a dynamic way.

```js
import { gql } from 'apollo-server-express';

const QUERY = gql`
  query {
    __schema {
      types {
        name
        fields {
          name
        }
      }
    }
  }
`;
```
### #checkoutTheDocs 🔍
- [GraphQL Introspection Docs](https://graphql.org/learn/introspection/)

