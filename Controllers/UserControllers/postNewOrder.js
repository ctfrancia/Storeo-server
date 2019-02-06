import insertNewOrder from '../../Models/AdminModels/insertNewOrder';

const postNewOrder = async (req, res, next) => {
  try {
    const result = await insertNewOrder(req.body);
    res
      .status(201)
      .send(result);
  } catch (err) {
    // eslint-disable-next-line
    console.error('Error in postNewOrder controller =>', err);
    err.errorMessage = 'Unable to post a new order.';
    next(err);
  }
};

export default postNewOrder;
