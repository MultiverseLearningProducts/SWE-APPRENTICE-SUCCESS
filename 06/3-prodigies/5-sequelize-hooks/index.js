import { db, Sequelize, DataTypes } from '../db';
/* 

You are creating a magical database of Patronuses for the Wizarding World. A Patronus is a magical guardian that protects a wizard from harm. Each Patronus has a name and an animal that represents it.

To make the database more user-friendly, you want to ensure that the names of the Patronuses are capitalized properly. However, you realize that it would be a tedious task to capitalize the names of all Patronuses manually. You decide to use a Sequelize beforeCreate hook that capitalizes the first letter of the name property before it is saved to the database.

👉 Your task: Define a beforeCreate hook on the Patronus model that capitalizes the first letter of the name property before it is saved to the database.

*/

// model definition provided
const Patronus = db.define('patronus', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  animal: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

// 👇👇👇 DEFINE `beforeCreate` HOOK HERE 👇👇👇



// DO NOT MODIFY THIS EXPORT
export {
  Patronus,
}
