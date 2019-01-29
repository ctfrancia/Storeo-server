import Sequelize from 'sequelize';
import connection from '../db';

const sequelize = connection();

const User = sequelize.define('user', {
  password: {
    type: Sequelize.STRING,
  },
  auth_token: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  role: {
    type: Sequelize.TINYINT,
  },
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  country: {
    type: Sequelize.STRING,
  },
  zip: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.INTEGER,
  },
});

//  eslint-disable-next-line
console.log(User);
