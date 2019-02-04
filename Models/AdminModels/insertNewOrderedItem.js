import Sequelize from 'sequelize';

import OrderedItem from '../../Schemas/Ordered_ItemModel';
import sequelize from '../../db';


const insertNewOrderedItem = async (orderedItem, orderId) => {
  const { product_id: productId, quantity } = orderedItem;

  const insertionResult = await sequelize.query(
    `INSERT INTO ordered_items
    (order_id, product_id, quantity )
    VALUES ( :orderId, :productId, :quantity )
    `,
    {
      model: OrderedItem,
      replacements: { orderId, productId, quantity },
      type: Sequelize.QueryTypes.INSERT,
    },
  );

  const orderedItemID = insertionResult[0];
  return orderedItemID;
};

export default insertNewOrderedItem;
