import retrieveOrdersFromUser from '../../Model - Queries/retrieveOrdersFromUser';

const getOrdersFromUser = async (req, res) => {
  try {
    //  get user id from req.body renaming it userId
    const { id: userId } = req.body.user;
    const previousOrders = await retrieveOrdersFromUser(userId);
    res
      .status(200)
      .send(previousOrders);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getOrdersFromUser controller =>', err);
    res
      .status(400)
      .send('Unable to retrieve orders.');
  }
};

export default getOrdersFromUser;
