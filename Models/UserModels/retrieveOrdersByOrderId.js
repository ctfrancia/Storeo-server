import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Schemas';
import formatOrders from '../../Helpers/formatOrders';

const { Order } = db;

const retrieveOrdersByOrderId = async (orderId) => {
  const previousOrders = await sequelize.query(
    `SELECT orders.created_at,
    GROUP_CONCAT(quantity) AS quantities,
    GROUP_CONCAT(name) AS products,
    GROUP_CONCAT(price) AS prices,
    GROUP_CONCAT(products.id) AS products_id
    FROM orders
    INNER JOIN ordered_items ON orders.id = ordered_items.order_id
    INNER JOIN products ON ordered_items.product_id = products.id
    WHERE orders.id = :orderId
    GROUP BY orders.id;`,
    {
      model: Order,
      replacements: { orderId },
      type: Sequelize.QueryTypes.SELECT,
    },
  );
  const formattedOrders = formatOrders(previousOrders);
  return formattedOrders;
};

export default retrieveOrdersByOrderId;
