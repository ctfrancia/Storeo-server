import sequelize from '../../db';

const getOrdersFromUser = async (req, res) => {
  const { userId } = req.body;
  if (userId) {
    const previousOrders = await sequelize.query(`SELECT * FROM orders WHERE user_id = ${userId}`);

    res
      .status(200)
      .send(previousOrders);
  }
};

export default getOrdersFromUser;
