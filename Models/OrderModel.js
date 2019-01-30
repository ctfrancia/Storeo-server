import Sequelize from 'sequelize';
import sequelize from '../db';

const Order = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_num: {
    type: Sequelize.STRING,
  },
  order_status: {
    type: Sequelize.INTEGER,
  },
  special_instructions: {
    type: Sequelize.STRING,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
}, { timestamps: false });

export default Order;
