import { db, Sequelize, DataTypes } from '../db';
import { Potion, Ingredient } from '../9-sequelize-class-methods';
/* 

Assume the provided model is Potion with the following properties:

name (string)
price (decimal)
quantity (integer)
Define an instance method on the Potion model that returns the total value of the potion. The total value should be determined by the following formula:

Write the Potion model definition with the instance method, and a test suite for the instance method.



*/
// 👇👇👇 DEFINE Potion.getTotalValue INSTANCE METHOD HERE 👇👇👇



export {
  Ingredient,
  Potion,
}


