![MV Logo](/logo.jpg)

# Sequelize Operators
In Sequelize, you can use the `Op` object to specify the type of comparison you want to make in your queries. The `Op` object provides several methods such as `eq` (equals), `gt` (greater than), `lt` (less than), `gte` (greater than or equal to), `lte` (less than or equal to), `ne` (not equal), `between`, `notBetween`, `in`, `notIn`, `like`, `notLike`, etc. These methods can be used when defining conditions in a query.

Here's an example of using the `Op.eq` operator to find all superheroes who are exactly 25 years old:
```js
import { Op } from 'sequelize';

Superhero.findAll({
  where: {
    age: {
      [Op.eq]: 25
    }
  }
})
  .then((superheroes) => {
    console.log(superheroes);
  });
```
In this example, the `Op.eq` method is used to specify that we want to find all superheroes where the age column is equal to 25.

You can also use multiple operators in the same query. For example, to find all superheroes who are 25 years old and have a superpower of "flight":
```js
import { Op } from 'sequelize';

Superhero.findAll({
  where: {
    age: {
      [Op.eq]: 25
    },
    superpower: {
      [Op.eq]: 'flight'
    }
  }
})
  .then((superheroes) => {
    console.log(superheroes);
  });
```
In this example, the query specifies two conditions: the age must be equal to 25 and the superpower must be equal to "flight". Only superheroes that meet both conditions will be returned.

## #checkoutTheDocs 🔍
- [Sequelize Where Clauses](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#applying-where-clauses)
