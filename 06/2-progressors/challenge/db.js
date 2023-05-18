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

export const NobleHouse = db.define('noblehouse', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  sigil: {
    type: Sequelize.STRING,
  },
  words: {
    type: Sequelize.STRING,
  },
  seat: {
    type: Sequelize.STRING,
  },
  region: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
});

export const Guest = db.define('guest', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    occupation: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('RSVP', 'Confirmed', 'Attended'),
      allowNull: false
    }
  }, {
    timestamps: false,
});
