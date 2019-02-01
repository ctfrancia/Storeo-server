import Sequelize from 'sequelize';
import sequelize from '../db';
import { db } from '../Models';

const { Order } = db;

const retrieveOrdersFromUser = (userId) => {
  const previousOrders = sequelize.query(
    `SELECT * FROM orders WHERE user_id = ${userId}`,
    {
      model: Order,
      type: Sequelize.QueryTypes.SELECT,
    },
  );
  return previousOrders;
};

export default retrieveOrdersFromUser;
