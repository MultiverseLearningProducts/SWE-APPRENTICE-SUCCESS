import { db, Sequelize, DataTypes } from '../db';
/* 

You are working on a database for a magical potion shop that specializes in strange and unusual potions. The shop has a variety of potions with various effects, and each potion has its own set of ingredients.

The shopkeepers would like to be able to query the potions in their shop and get a list of all the ingredients needed to make each potion, sorted alphabetically.

You have been given the Potion and Ingredient models, which have already been defined in Sequelize. The Potion model has a name property, and the Ingredient model has a name property and a potionId property.

Your task is to define a custom class method on the Potion model called getIngredients, which should return an array of all the ingredients required to make that potion, sorted alphabetically by ingredient name.

Signature:
async function getIngredients(potionName: string) => Promise<string[]>;

Example:
const potionName = 'Mandrake Elixir';
const ingredients = await Potion.getIngredients(potionName);
console.log(ingredients); // ['mandrake root', 'wormwood']



*/


// Ingredient Model Definition
const Ingredient = db.define('ingredient', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

// Potion Model Definition
const Potion = db.define('potion', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00,
    validate: {
      min: 0
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  }
});

Ingredient.belongsToMany(Potion, { through: 'PotionIngredients' });
Potion.belongsToMany(Ingredient, { through: 'PotionIngredients' });

// 👇👇👇 DEFINE CLASS METHOD Potion.getIngredients HERE 👇👇👇





/* 

Assume the provided model is Potion with the following properties:

name (string)
price (decimal)
quantity (integer)
Define an instance method on the Potion model that returns the total value of the potion. The total value should be determined by the following formula:

Write the Potion model definition with the instance method, and a test suite for the instance method.



*/
// 👇👇👇 DEFINE INSTANCE METHOD Potion.getTotalValue HERE 👇👇👇





// DO NOT MODIFY THIS EXPORT
export {
  Ingredient,
  Potion,
}


