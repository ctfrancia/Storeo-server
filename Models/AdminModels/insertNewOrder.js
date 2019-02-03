import Sequelize from 'sequelize';
import uuidv4 from 'uuid/v4';

import Order from '../../Schemas/OrderModel';
import sequelize from '../../db';

import insertNewOrderedItem from './insertNewOrderedItem';
import retrieveOrdersByOrderId from '../UserModels/retrieveOrdersByOrderId';

const insertNewOrder = async (userObj, specInstructions, orderedItems) => {
  const {
    id: userId, first_name: fName, last_name: lName, email, phone,
  } = userObj;
  const orderNum = uuidv4();
  const orderStatus = 0;
  // PENDING TO DEFFINE STATUS CODES AND THE SETTER FUNCTION

  const order = await sequelize.query(
    `INSERT INTO orders
    (order_num, order_status, special_instructions, user_id)
    VALUES ( :orderNum, :orderStatus, :specInstructions, :userId)
    `,
    {
      model: Order,
      replacements: {
        orderNum,
        specInstructions,
        userId,
        orderStatus,
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

  const orderedItemsStatus = await retrieveOrdersByOrderId(orderId);

  // Format before sending the response
  const orderDetails = {
    first_name: fName,
    last_name: lName,
    special_instructions: specInstructions,
    email,
    phone,
    order_num: orderNum,
    ordered_items: orderedItemsStatus,
  };


  return orderDetails;
};

export default insertNewOrder;
