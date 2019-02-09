import Sequelize from 'sequelize';
import uuidv4 from 'uuid/v4';

import Order from '../../Schemas/OrderModel';
import sequelize from '../../db';

import insertNewOrderedItem from './insertNewOrderedItem';
import retrieveOrdersByOrderId from '../UserModels/retrieveOrdersByOrderId';
import setOrderStatus from '../../Helpers/setOrderStatus';

const insertNewOrder = async (data) => {
  const {
    total,
    special_instructions: instructions,
    ordered_items: orderedItems,
  } = data;

  const {
    id: userId, first_name: fName, last_name: lName, email, phone,
  } = data.user;

  const orderNum = uuidv4();
  const orderStatus = 0;
  // PENDING TO DEFINE STATUS CODES AND THE SETTER FUNCTION

  const order = await sequelize.query(
    `INSERT INTO orders
    (order_num, order_status, special_instructions, user_id, total)
    VALUES ( :orderNum, :orderStatus, :instructions, :userId, :total)
    `,
    {
      model: Order,
      replacements: {
        orderNum,
        orderStatus,
        instructions,
        userId,
        total,
      },
      type: Sequelize.QueryTypes.INSERT,
    },
  );
  const orderId = order[0];

  // eslint-disable-next-line
  // const orderedItemsInsertionResult = await Promise.all(
  //   orderedItems.map(orderedItem => insertNewOrderedItem(orderedItem, orderId)),
  // );

  await Promise.all(
    orderedItems.map(orderedItem => insertNewOrderedItem(orderedItem, orderId)),
  );

  const orderedItemsDetails = await retrieveOrdersByOrderId(orderId);

  // Format before sending the response
  const orderDetails = {
    first_name: fName,
    last_name: lName,
    special_instructions: instructions,
    email,
    phone,
    order_num: orderNum,
    order_status: setOrderStatus(orderStatus),
    ordered_items: orderedItemsDetails,
  };

  return orderDetails;
};

export default insertNewOrder;
