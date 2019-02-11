import retrieveProductsByCategoryId from '../../Models/UserModels/retrieveProductsByCategoryId';

const getProductsByCategoryId = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const products = await retrieveProductsByCategoryId(categoryId);
    res
      .status(200)
      .send(products);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getProductByCategoryId Controller =>', err);
    err.errorMessage = 'Impossible to retrieve products.';
    next(err);
  }
};

export default getProductsByCategoryId;
