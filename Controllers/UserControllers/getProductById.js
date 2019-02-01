import retrieveProductById from '../../Model - Queries/retrieveProductById';

const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await retrieveProductById(productId);
    res
      .status(200)
      .send(product);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getProductById Controller =>', err);
    res
      .status(401)
      .send('Impossible to retrieve product.');
  }
};

export default getProductById;
