import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Schemas';

const { Product } = db;

const retrieveProductsByCategoryId = (categoryId) => {
  const products = sequelize.query(
    `SELECT * FROM products WHERE category_id = ${categoryId}`,
    {
      model: Product,
      type: Sequelize.QueryTypes.SELECT,
    },
  );
  return products;
};

export default retrieveProductsByCategoryId;
