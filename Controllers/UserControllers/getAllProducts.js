import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Models';

const { Product } = db;

const getAllProducts = async (req, res) => {
  try {
    const products = await sequelize.query(
      'SELECT * FROM products',
      {
        model: Product,
        type: Sequelize.QueryTypes.SELECT,
      },
    );
    res
      .status(200)
      .send(products);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getAllProducts Controller =>', err);
    res
      .status(401)
      .send('Impossible to retrieve products.');
  }
};

export default getAllProducts;
