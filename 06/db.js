import path from 'path';
export { Sequelize, DataTypes, Model } from 'sequelize';

export const db = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite'),
  logging: false,
});
