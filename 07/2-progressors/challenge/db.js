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

export const NobleHouse = sequelize.define('noblehouse', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  sigil: {
    type: DataTypes.STRING,
  },
  words: {
    type: DataTypes.STRING,
  },
  seat: {
    type: DataTypes.STRING,
  },
  region: {
    type: DataTypes.STRING,
  },
  founded: {
    type: DataTypes.DATEONLY,
  },
}, {
  timestamps: false,
});

export const Guest = sequelize.define('guest', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('RSVP', 'Confirmed', 'Attended'),
      allowNull: false
    }
  }, {
    timestamps: false,
});
