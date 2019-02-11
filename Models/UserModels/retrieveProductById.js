import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Schemas';
import formatProductProperties from '../../Helpers/formatProductProperties';

const { Product } = db;

const retrieveProductById = async (productId) => {
  const [product] = await sequelize.query(
    `SELECT products.*,
    GROUP_CONCAT(product_properties.property_name) as property_names,
    GROUP_CONCAT(product_properties.property_value) as property_values,
    GROUP_CONCAT(product_properties.units) as units
    FROM products
    LEFT JOIN product_properties ON product_properties.product_id = products.id
    WHERE products.id = ${productId}
    GROUP BY products.id;`,
    {
      model: Product,
      type: Sequelize.QueryTypes.SELECT,
    },
  );

  if (product) {
    const [formattedProduct] = formatProductProperties([product]);
    return [formattedProduct];
  }
  return [];
};

export default retrieveProductById;
