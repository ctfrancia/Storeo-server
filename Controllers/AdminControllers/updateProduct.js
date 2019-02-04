import ProductModel from '../../Models/AdminModels/productModel';

const updateProduct = async (req, res) => {
  const toInsert = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    discount: req.body.discount,
    tags: req.body.tags,
    images: req.body.images,
    category_id: req.body.category_id,
  };
  const productProperties = req.body.product_properties;
  const productToUpdate = req.params.productId;

  try {
    await ProductModel.updateProduct(toInsert, productToUpdate);
    await ProductModel.updateProductProperties(productProperties, productToUpdate);

    res.status(202).send('Update successful');
  } catch (e) {
    /* eslint-disable-next-line */
    console.log(e);
    res.status(500).send('Something went wrong, sorry!');
  }
};
export default updateProduct;
