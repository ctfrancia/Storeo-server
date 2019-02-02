import Sequelize from 'sequelize';
import sequelize from '../db';
import { db } from '../Models';
import formatProductProperties from '../Helpers/formatProductProperties';

const { Product } = db;

const retrieveProductById = async (productId) => {
  const [product] = await sequelize.query(
    `SELECT products.*,
  GROUP_CONCAT(product_properties.property_name) as property_names,
  GROUP_CONCAT(product_properties.property_value) as property_values
  FROM products, product_properties
  WHERE products.id = ${productId} AND products.id = product_properties.product_id GROUP BY products.id;`,
    {
      model: Product,
      type: Sequelize.QueryTypes.SELECT,
    },
  );
  const [formattedProduct] = formatProductProperties([product]);
  return [formattedProduct];
};

export default retrieveProductById;
