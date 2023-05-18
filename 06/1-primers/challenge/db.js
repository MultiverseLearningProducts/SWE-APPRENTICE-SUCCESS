import { Sequelize } from 'sequelize';

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

export const Creature = db.define('creature', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
