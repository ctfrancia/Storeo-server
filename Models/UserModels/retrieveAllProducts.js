import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Schemas';

const { Product } = db;

const retrieveAllProducts = async () => {
  const products = await sequelize.query(
    `SELECT products.*,
  GROUP_CONCAT(product_properties.property_name) as property_names,
  GROUP_CONCAT(product_properties.property_value) as property_values
  FROM products, product_properties
  WHERE products.id = product_properties.product_id GROUP BY products.id`,
    {
      model: Product,
      type: Sequelize.QueryTypes.SELECT,
    },
  );
  const formattedProducts = products.map(product => Object.assign(product,
    {
      property_names: product.property_names.split(','),
      property_values: product.property_values.split(','),
    }));
  return formattedProducts;
};

export default retrieveAllProducts;
