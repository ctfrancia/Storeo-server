import sequelize from '../../db';

const getOrdersFromUser = async (req, res) => {
  try {
    //  get user id from req.body renaming it userId
    const { id: userId } = req.body;
    if (userId) {
      const [previousOrders] = await sequelize.query(`SELECT * FROM orders WHERE user_id = ${userId}`);

      res
        .status(200)
        .send(previousOrders);
    } else {
      throw new Error('User is not logged in.');
    }
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getOrdersFromUser controller =>', err);
    res
      .status(400)
      .send('Unable to retrieve orders.');
  }
};

export default getOrdersFromUser;
