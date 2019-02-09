import retrieveAllProducts from '../../Models/UserModels/retrieveAllProducts';

const getAllProducts = async (req, res, next) => {
  try {
    const products = await retrieveAllProducts();

    res
      .status(200)
      .send(products);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getAllProducts Controller =>', err);
    err.errorMessage = 'Impossible to retrieve products.';
    next(err);
  }
};

export default getAllProducts;
