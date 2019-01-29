import Sequelize from 'sequelize';
import sequelize from '../db';

const Product = sequelize.define('product', {
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.DECIMAL,
  },
  timestamp: {
    type: Sequelize.DATE,
  },
  tags: {
    type: Sequelize.JSON,
  },
  category_id: {
    type: Sequelize.INTEGER,
  },
});

export default Product;
