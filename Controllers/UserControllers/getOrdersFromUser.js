import retrieveOrdersFromUser from '../../Models/UserModels/retrieveOrdersFromUser';

const getOrdersFromUser = async (req, res, next) => {
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
    err.errorMessage = 'Unable to retrieve orders.';
    next(err);
  }
};

export default getOrdersFromUser;
