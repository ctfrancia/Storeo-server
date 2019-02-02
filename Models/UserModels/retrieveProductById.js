import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Schemas';

const { Product } = db;

const retrieveProductById = (productId) => {
  const product = sequelize.query(
    `SELECT DISTINCT * FROM products WHERE id = ${productId}`,
    {
      model: Product,
      type: Sequelize.QueryTypes.SELECT,
    },
  );
  return product;
};

export default retrieveProductById;
