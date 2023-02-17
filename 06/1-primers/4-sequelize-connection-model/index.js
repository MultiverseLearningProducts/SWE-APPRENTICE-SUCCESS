import { db, Sequelize, DataTypes } from '../db';
/* 

You've been tasked with creating a database to store a list of wizards and their spells. You should use Sequelize to define a database connection and a model for the wizards.

The wizard model should have the following attributes:

- name: a string containing the wizard's name, which should be required and unique
- spell: a string containing the name of the wizard's favorite spell, which should be required
- power: an integer containing the wizard's power level, which should be required and have a default value of 0
- house: a string containing the wizard's house, which should be required and have a default value of "unsorted"

*/

// 👇👇👇 define the Wizard model here! 
export let Wizard;
