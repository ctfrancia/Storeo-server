import Sequelize from 'sequelize';
// import bcrypt from 'bcrypt';
import connection from '../db';

const Category = connection.define('category', {
  id: {
    type: Sequelize.INTEGER(11),
    notNull: true,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    notNull: true,
  },
});

export default Category;
