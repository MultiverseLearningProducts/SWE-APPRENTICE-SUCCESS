import { db, Sequelize, DataTypes } from '../db';
import { Wizard } from '../4-sequelize-connection-model';

/* 

You have been tasked with implementing four functions to interact with the wizard model using Sequelize's methods. You should implement the following functions:

- createWizard - creates a new wizard with the provided data
Input: object containing name, spell, power, and house properties
Output: Promise containing the created wizard object

- findWizard - finds a wizard with the provided ID
Input: integer representing the wizard ID
Output: Promise containing the found wizard object

- deleteWizard - deletes a wizard with the provided ID
Input: integer representing the wizard ID
Output: Promise containing the number of deleted rows (should always be 1)

- updateWizard - updates a wizard with the provided data
Input: integer representing the wizard ID and object containing name, spell, power, and house properties
Output: Promise containing the updated wizard object

*/

// 👇👇👇 define the functions here!

export const createWizard = () => {
  // your code here

}

export const findWizard = () => {
  // your code here

}

export const deleteWizard = () => {
  // your code here

}

export const updateWizard = () => {
  // your code here

}
