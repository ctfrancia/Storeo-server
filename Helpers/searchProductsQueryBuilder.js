import Sequelize from 'sequelize';
import sequelize from '../db';
import { db } from '../Schemas';

const { Product } = db;

const searchProductsQueryBuilder = async (queryPhrase, categoryName) => {
  let categoryId;
  const replacements = [];
  const queryArray = queryPhrase.split(' ').filter(str => str.length > 0);

  // First part of the query string, to concat coresponding
  // product_properties for each product into an array.
  let query = `SELECT products.*,
  GROUP_CONCAT(product_properties.property_name) as property_names,
  GROUP_CONCAT(product_properties.property_value) as property_values
    FROM products
      LEFT JOIN product_properties ON product_properties.product_id = products.id
      WHERE`;


  // If category name is available retireve that categories id
  if (categoryName) {
    const categoryIdObject = await sequelize.query(
      `SELECT id FROM categories
      WHERE name = :categoryName`,
      {
        model: Product,
        replacements: { categoryName },
        type: Sequelize.QueryTypes.SELECT,
      },
    );
    // push `categoryId` as first item in `replacements` array
    categoryId = categoryIdObject[0].id;
    replacements.push(categoryId);
    query += ' products.category_id LIKE ?';
  } else if (!categoryName) {
    // "%" is a wildcard for searching for product in all categories
    query += ' products.category_id LIKE "%"';
  }

  queryArray.forEach((word) => {
    // For each word in the query phrase append the string to query and
    // push word in replacements array related to both `?` in the query
    query = `${query} AND (name LIKE ? OR description LIKE ? )`;
    replacements.push(`%${word}%`, `%${word}%`);
  });

  query += ' GROUP BY products.id';
  return { query, replacements };
};

export default searchProductsQueryBuilder;
