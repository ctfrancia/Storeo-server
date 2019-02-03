import insertNewOrder from '../../Models/AdminModels/insertNewOrder';

const postNewOrder = async (req, res) => {
  const {
    user,
    special_instructions: instructions,
    ordered_items: orderedItems,
  } = req.body;

  try {
    const result = await insertNewOrder(user, instructions, orderedItems);
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
