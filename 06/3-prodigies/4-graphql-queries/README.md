![MV Logo](/logo.jpg)

# GraphQL - Queries
In GraphQL, queries are used to retrieve data from the server. A query is a request for specific data, which can be customized to return only the data you need. GraphQL queries use the same syntax as object literals in JavaScript, making them easy to read and write.

## Basic Query 🔍
To make a query, you need to specify the fields you want to retrieve from the server. The simplest query just specifies the field(s) you want to retrieve:

```
import { gql } from 'apollo-server-express';

const GET_ALL_HEROES = gql`
  query {
    heroes {
      name
      age
      superpower
    }
  }
`;

```

This query will retrieve the name, age, and superpower of all heroes.

## Query with Arguments 🎯
Queries can also take arguments, which allow you to customize the data that is returned. Here's an example of a query with arguments:

```
const GET_HERO_BY_NAME = gql`
  query getHeroByName($name: String!) {
    hero(name: $name) {
      name
      age
      superpower
    }
  }
`;

```

This query will retrieve the name, age, and superpower of the hero with the specified name.

Note that the argument is specified in the query definition, and its value is passed in as a variable.

## Query Fragments 💎
Query fragments are reusable pieces of a query that can be included in other queries. They can make your queries more modular and easier to read.

```
const HERO_FRAGMENT = gql`
  fragment heroFields on Hero {
    name
    age
    superpower
  }
`;

const GET_HERO_BY_NAME = gql`
  query getHeroByName($name: String!) {
    hero(name: $name) {
      ...heroFields
    }
  }
  ${HERO_FRAGMENT}
`;

```

In this example, the `heroFields` fragment specifies the fields to retrieve, and it is included in the `GET_HERO_BY_NAME` query using the `...` syntax.

Queries are a fundamental concept in GraphQL. They allow you to retrieve only the data you need from the server, and they can be customized with arguments and query fragments.
## #checkoutTheDocs 🔍
- [GraphQL Queries](https://graphql.org/learn/queries/)
- [Query Language](https://graphql.org/graphql-js/query-and-mutation/)

## 🎥 Video Resources
- [GraphQL Fragments](https://www.youtube.com/watch?v=AAHR7eBKLU8)
