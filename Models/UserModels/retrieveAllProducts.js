import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Schemas';
import formatProductProperties from '../../Helpers/formatProductProperties';

const { Product } = db;

const retrieveAllProducts = async () => {
  const products = await sequelize.query(
    `SELECT products.*,
      GROUP_CONCAT(product_properties.property_name) as property_names,
      GROUP_CONCAT(product_properties.property_value) as property_values,
      GROUP_CONCAT(product_properties.units) as units
        FROM products
          LEFT JOIN product_properties ON product_properties.product_id = products.id
          GROUP BY products.id;`,
    {
      model: Product,
      type: Sequelize.QueryTypes.SELECT,
    },
  );
  const formattedProducts = formatProductProperties(products);
  return formattedProducts;
};

export default retrieveAllProducts;
