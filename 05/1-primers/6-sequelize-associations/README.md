![MV Logo](/logo.jpg)

# Sequelize Associations
Sequelize associations allow you to link two or more models together, creating relationships between them. This makes it easier to manage and retrieve related data in your database. There are four types of associations in Sequelize: `belongsTo`, `hasOne`, `hasMany`, and `belongsToMany`.

Let's say we have a `Superhero` model with three properties: `name`, `superpower`, and `age`, as defined in previous examples. Now, let's create another model, `Villain`, that is associated to the `Superhero` model.

```js
const Superhero = sequelize.define("Superhero", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  superpower: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Villain = sequelize.define("Villain", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  evilPower: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
```

To define an association between the `Superhero` and `Villain` models, we use the `hasMany` method on the `Superhero` model and pass in the `Villain` model as an argument:

```js
Superhero.hasMany(Villain, {
  as: "enemies",
  foreignKey: "superheroId"
});
```
This creates a `hasMany` association between the `Superhero` and `Villain` models, with the key `superheroId` as the foreign key in the `Villain` model. The as property allows us to refer to this association as "enemies" in our code.

Now we can easily retrieve all the villains of a superhero by calling the `getEnemies` method on an instance of the `Superhero` model:

```js
const superman = await Superhero.findOne({ where: { name: "Superman" } });
const enemies = await superman.getEnemies(); // [ { name: 'Lex Luthor', evilPower: 'Genius', superheroId: 1 } ]
```
We can also ask for all the enemies at the same time as querying the Superhero. This is called eager loading and is done by using the `include` option in the `findOne` method:
```js
const superman = await Superhero.findOne({
  where: { name: "Superman" },
  include: [{ model: Villain, as: "enemies" }]
});
console.log(superman); 
/* 
{
  name: 'Superman',
  superpower: 'Flight',
  age: 30,
  enemies: [
    { name: 'Lex Luthor', evilPower: 'Genius', superheroId: 1 }
  ]
}
 */
```

## #checkoutTheDocs 🔍
- [Sequelize - Associations](https://sequelize.org/master/manual/associations.html)
- [Sequelize - Eager Loading](https://sequelize.org/master/manual/eager-loading.html)

## Video Resources 🎥
- [Sequelize: One-to-Many Associations](https://youtu.be/HJGWu0cZUe8?t=1847)