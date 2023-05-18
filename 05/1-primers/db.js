import { Sequelize, DataTypes, Model } from 'sequelize';

// resolve the path to the db file
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const storage = join(__dirname, 'db.sqlite');

export const db = new Sequelize({
  dialect: 'sqlite',
  storage,
  logging: false,
});

export { Sequelize, DataTypes, Model };