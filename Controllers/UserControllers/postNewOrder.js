import insertNewOrder from '../../Models/AdminModels/insertNewOrder';

const postNewOrder = async (req, res) => {
  try {
    const result = await insertNewOrder(req.body);
    res
      .status(201)
      .send(result);
  } catch (err) {
    // eslint-disable-next-line
    console.error('Error in postNewOrder controller =>', err);
    res
      .status(400)
      .send('Unable to post a new order.');
  }
};

export default postNewOrder;
