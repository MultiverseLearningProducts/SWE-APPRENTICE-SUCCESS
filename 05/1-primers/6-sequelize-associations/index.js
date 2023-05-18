import { db, Sequelize, DataTypes } from '../db';
import { Wizard } from '../4-sequelize-connection-model';

// owl model provided for you 
const Owl = db.define('owl', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

/* 

You are building a web application for a magical school. The application will allow wizards to keep track of their owls. You need to define the Sequelize association for the Owl model, and implement the following function:




*/

// 👇👇👇 define the association here!



// 👇👇👇 define the function here!

export const getWizardWithOwls = () => {
  // your code here

}
