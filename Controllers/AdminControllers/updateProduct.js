import ProductModel from '../../Models/AdminModels/productModel';

const updateProduct = async (req, res, next) => {
  const toInsert = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    discount: req.body.discount,
    tags: req.body.tags,
    images: req.body.images,
    category_id: req.body.category_id,
  };
  // const productProperties = req.body.product_properties;
  const productToUpdate = req.params.productId;
  const productProperties = req.body.product_properties.map((prop) => {
    const unit = (!prop.units) ? '' : prop.units;
    return Object.assign({}, {
      category_id: prop.category_id,
      property_name: prop.property_name,
      units: unit,
      property_value: prop.property_value,
    });
  });

  try {
    await ProductModel.updateProduct(toInsert, productToUpdate);
    await ProductModel.updateProductProperties(productProperties, productToUpdate);

    res.status(202).send('Update successful');
  } catch (err) {
    /* eslint-disable-next-line */
    console.log('Error in updateProduct controller =>', err);
    err.errorMessage = 'Error while updating a product.';
    next(err);
  }
};
export default updateProduct;
