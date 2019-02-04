import productModel from '../../Models/AdminModels/productModel';

const deleteProductById = async (req, res) => {
  const { productId } = req.params;

  try {
    await productModel.deleteProduct(productId);
    res
      .status(200)
      .send('Success.');
  } catch (error) {
    // eslint-disable-next-line
    console.error('Error in the deleteProducById controller.');
    res
      .status(500)
      .send('Unable to delete the product.');
  }
};

export default deleteProductById;
