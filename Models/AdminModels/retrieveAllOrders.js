import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Schemas';
import formatOrders from '../../Helpers/formatOrders';

const { Order } = db;

const retrieveAllOrders = async () => {
  const allOrders = await sequelize.query(
    `SELECT orders.id AS order_id, orders.order_num, orders.order_status, orders.special_instructions, orders.user_id, orders.created_at,
    GROUP_CONCAT(quantity) AS quantities,
    GROUP_CONCAT(name) AS products,
    GROUP_CONCAT(price) AS prices,
    GROUP_CONCAT(products.id) AS products_id
    FROM orders
    INNER JOIN ordered_items ON orders.id = ordered_items.order_id
    INNER JOIN products ON ordered_items.product_id = products.id
    GROUP BY orders.id;`,
    {
      model: Order,
      type: Sequelize.QueryTypes.SELECT,
    },
  );
  const formattedOrders = formatOrders(allOrders);
  return formattedOrders;
};

export default retrieveAllOrders;
