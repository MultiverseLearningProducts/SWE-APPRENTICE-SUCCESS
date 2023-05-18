import { db, Sequelize, DataTypes } from '../db';
/* 

You're working on a magical application that helps wizards and witches find the perfect wand. You have a Wand model with the following properties:
- wood (string, required)
- core (string, required)
- length (decimal, required)
- price (decimal, required)

👉 Your task: Write a function, `getMostExpensiveWandByWood`, that takes a single argument `woodTypes` as an array of strings that represent the wood types to filter by. The function should return an array of objects, each containing the wood and price of the most expensive wand for each wood type.

Use the Sequelize operators to group by wood, find the maximum price, and return the corresponding Wand object.

Signature:
getMostExpensiveWandByWood(woodTypes: Array<String>): Promise<Array<{wood: String, price: Number}>>


Example:

const woodTypes = ['Oak', 'Willow', 'Maple'];
const result = await getMostExpensiveWandByWood(woodTypes);

console.log(result);
// [
//   { wood: 'Oak', price: 599.99 },
//   { wood: 'Willow', price: 799.99 },
//   { wood: 'Maple', price: 599.99 },
// ]


*/

// model definition provided
const Wand = db.define('wand', {
  wood: {
    type: DataTypes.STRING,
    allowNull: false
  },
  core: {
    type: DataTypes.STRING,
    allowNull: true
  },
  length: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

const getMostExpensiveWandByWood = async (woodTypes) => {
  // 👇👇👇 WRITE CODE HERE 👇👇👇

}



// DO NOT MODIFY THIS EXPORT
export {
  Wand,
  getMostExpensiveWandByWood
}
