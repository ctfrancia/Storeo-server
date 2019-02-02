import productModel from '../../Models/AdminModels/productModel';

const postNewProduct = async (req, res) => {
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

  try {
    const getProductId = await productModel.addProduct(toInsert);
    await productModel.addToProductProperties(productProperties, getProductId[0]);
    res.status(201).send('Success');
  } catch (e) {
    /* eslint-disable-next-line */
    console.log(e);
    res.status(500).send('Was unable to save correctly, please try again later');
  }
};
export default postNewProduct;
