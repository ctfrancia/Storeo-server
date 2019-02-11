import productModel from '../../Models/AdminModels/productModel';

const deleteProductById = async (req, res, next) => {
  const { productId } = req.params;

  try {
    await productModel.deleteProduct(productId);
    res
      .status(200)
      .send('Success');
  } catch (err) {
    // eslint-disable-next-line
    console.error('Error in the deleteProducById controller.', err);
    err.errorMessage = 'Unable to delete the product.';
    next(err);
  }
};

export default deleteProductById;
