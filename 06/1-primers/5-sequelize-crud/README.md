![MV Logo](/logo.jpg)

# Sequelize CRUD Operations

## What is CRUD?
CRUD stands for Create, Read, Update, and Delete, which are the four basic operations you can perform on data in a database. In Sequelize, these operations are performed using model instances and the following methods:

- `create` - Creates a new record in the database
- `findAll` - Retrieves all records from the database
- `findByPk` - Retrieves a record from the database by its primary key (usually an ID)
- `update` - Updates the given properties of a record in the database
- `destroy` - Deletes a record from the database

For Example:
```js
// import Superhero model
import Superhero from './models/superhero';

const init = async () => {
  // CREATE a new Superhero instance and save to the database
  const superman = await Superhero.create({
    name: 'Superman',
    superpower: 'Flight',
    age: 30
  });
  console.log(superman); // { id: 1, name: 'Superman', superpower: 'Flight', age: 30 }

  // READ all Superhero instances from the database
  const superheroes = await Superhero.findAll();
  console.log(superheroes); // [ { id: 1, name: 'Superman', superpower: 'Flight', age: 30 } ]

  // UPDATE the age of the Superhero instance with name 'Superman'
  await Superhero.update({ age: 31 }, { where: { name: 'Superman' } });

  // READ the Superhero instance with name 'Superman' from the database
  const updatedSuperman = await Superhero.findOne({ where: { name: 'Superman' } });
  console.log(updatedSuperman); // { id: 1, name: 'Superman', superpower: 'Flight', age: 31 }

  // DELETE the Superhero instance with name 'Superman' from the database
  await Superhero.destroy({ where: { name: 'Superman' } });

  // READ all Superhero instances from the database
  const remainingSuperheroes = await Superhero.findAll();
  console.log(remainingSuperheroes); // []
};
init();
```

In this example, we use the `create` method to add a new `Superhero` instance to the database, the `findAll` method to retrieve all `Superhero` instances from the database, the `update` method to update a `Superhero` instance in the database, and the `destroy` method to delete a `Superhero` instance from the database.

The methods return Promises, so we write an `async` function we call `init`, so that we can use the `await` keyword to wait for the Promises to resolve before logging the results.

## #checkoutTheDocs 🔍
- [Sequelize - Model Instance Methods](https://sequelize.org/master/manual/model-instances.html)
- [Sequelize - Model Querying Methods](https://sequelize.org/master/manual/model-querying-basics.html)

## Video Resources 🎥
- [Sequelize: Inserting Data](https://www.youtube.com/watch?v=JAld7bV5qV8)

