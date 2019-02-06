import retrieveAllProducts from '../../Models/UserModels/retrieveAllProducts';

const getAllProducts = async (req, res) => {
  try {
    const products = await retrieveAllProducts();

    res
      .status(200)
      .send(products);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getAllProducts Controller =>', err);
    res
      .status(401)
      .send('Impossible to retrieve products.');
  }
};

export default getAllProducts;
