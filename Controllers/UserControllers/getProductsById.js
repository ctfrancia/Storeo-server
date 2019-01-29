import Product from '../../Models/ProductModel';
import sequelize from '../../db';

const getProductsById = async (req, res) => {
  try {
    const id = req.params.productId;
    const product = await sequelize.query(`SELECT * FROM products WHERE id = ${id}`, { model: Product });
    res
      .status(200)
      .send(product);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getProductById Controller =>', err);
    res
      .status(401)
      .send('Impossible to retrieve product.');
  }
};

export default getProductsById;
