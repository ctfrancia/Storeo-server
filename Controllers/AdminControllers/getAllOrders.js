import retrieveAllOrders from '../../Models/AdminModels/retrieveAllOrders';

const getAllOrders = async (req, res, next) => {
  try {
    const allOrders = await retrieveAllOrders();
    res
      .status(200)
      .send(allOrders);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getAllOrders controller =>', err);
    err.errorMessage = 'Unable to retrieve orders.';
    next(err);
  }
};

export default getAllOrders;
