import Sequelize from 'sequelize';

import Order from '../../Models/OrderModel';
import sequelize from '../../db';

const postNewOrder = async (req, res) => {
// Deconstruct the `req` object, & rename values to
// camelCase notation [ (from) req_prop_name: (to) reqPropName]
  const {
    order_num: orderNum,
    order_status: orderStatus,
    special_instructions: specInstructions,
    user_id: userId,
  } = req.body;

  try {
    const result = await sequelize.query(
      `INSERT INTO orders
      (order_num, order_status, special_instructions, user_id)
      VALUES ( :orderNum, :orderStatus, :specInstructions, :userId)
      `,
      {
        model: Order,
        replacements: {
          orderNum,
          orderStatus,
          specInstructions,
          userId,
        },
        type: Sequelize.QueryTypes.INSERT,
      },
    );
    // format before sending the response
    const formattedResult = result[0][0];
    res
      .status(201)
      .send(formattedResult);
  } catch (err) {
    // eslint-disable-next-line
    console.error('Error in postNewOrder controller =>', err);
    res
      .status(400)
      .send('Unable to post a new order.');
  }
};

export default postNewOrder;
