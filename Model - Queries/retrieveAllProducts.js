import Sequelize from 'sequelize';
import sequelize from '../db';
import { db } from '../Models';

const { Product } = db;

const retrieveAllProducts = async () => {
  try {
    const products = await sequelize.query(
      'SELECT * FROM products',
      {
        model: Product,
        type: Sequelize.QueryTypes.SELECT,
      },
    );
    return products;
  } catch (err) {
    throw Error('Error in retrieveAllProducts Model');
  }
};

export default retrieveAllProducts;
