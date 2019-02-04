import retrieveAllOrders from '../../Models/AdminModels/retrieveAllOrders';

const getAllOrders = async (req, res) => {
  try {
    const allOrders = await retrieveAllOrders();
    res
      .status(200)
      .send(allOrders);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getAllOrders controller =>', err);
    res
      .status(400)
      .send('Unable to retrieve orders.');
  }
};

export default getAllOrders;
