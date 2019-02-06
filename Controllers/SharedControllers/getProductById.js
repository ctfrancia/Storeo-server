import retrieveProductById from '../../Models/UserModels/retrieveProductById';

const getProductById = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await retrieveProductById(productId);
    res
      .status(200)
      .send(product);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getProductById Controller =>', err);
    err.errorMessage = 'Impossible to retrieve product.';
    next(err);
  }
};

export default getProductById;
