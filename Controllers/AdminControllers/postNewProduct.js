import productModel from '../../Models/AdminModels/productModel';

const postNewProduct = async (req, res, next) => {
  const toInsert = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    discount: req.body.discount,
    tags: req.body.tags,
    images: req.body.images,
    category_id: req.body.category_id,
  };
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
    const getProductId = await productModel.addProduct(toInsert);
    // getProductId will either return true or the product Id, === to protect against truthiness

    if (getProductId === true) {
      res.status(409).end('Product already exists');
    } else {
      await productModel.addToProductProperties(productProperties, getProductId[0]);
      res.status(201).send('Success.');
    }
  } catch (err) {
    /* eslint-disable-next-line */
    console.log('Error in postNewProduct controller =>', err);
    err.errorMessage = 'Error while creating a new product.';
    next(err);
  }
};
export default postNewProduct;
