import { db, Sequelize, DataTypes } from '../db';
import { Potion, Ingredient } from '../9-sequelize-class-methods';
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
// 👇👇👇 DEFINE Potion.getIngredients CLASS METHOD HERE 👇👇👇



export {
  Ingredient,
  Potion,
}


