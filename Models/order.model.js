import Sequelize from 'sequelize';
import sequelize from '../db';

const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  order_num: {
    type: Sequelize.STRING,
    notNull: true,
  },
  order_status: {
    type: Sequelize.STRING,
    notNull: true,
  },
  special_instructions: {
    type: Sequelize.STRING,
    notNull: true,
  },
  user_id: {
    type: Sequelize.INTEGER(11),
    defaultValue: null,
  },
});

export default Order;
