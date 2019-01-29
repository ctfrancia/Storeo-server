import { Product } from '../../Models/ProductModel';
import connection from '../../db';

const sequelize = connection();

const getAllProducts = async (req, res) => {
  try {
    const products = await sequelize.query('SELECT * FROM products', { model: Product });
    res
      .status(200)
      .send(products);
  } catch (err) {
    console.error('Error in getAllProductsController =>', err);
    res
      .status(401)
      .send('Impossible to retrieve products.');
  }
};

export default getAllProducts;
