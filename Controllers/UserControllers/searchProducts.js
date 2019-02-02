import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Models';
import formatPricesAndDiscount from '../../Helpers/formatPricesAndDiscount';

const { Product } = db;

const searchProductsQueryBuilder = async (queryPhrase, categoryName) => {
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
  let categoryId;

  // If category name is available retireve that categories id
  if (categoryName) {
    const categoryIdObject = await sequelize.query(
      'SELECT id FROM categories WHERE name = :categoryName',
      { model: Product, replacements: { categoryName }, type: Sequelize.QueryTypes.SELECT },
    );
    categoryId = categoryIdObject[0].id;

    // push `categoryId` as first item in `replacements` array
    replacements.push(categoryId);
    query += ' products.category_id LIKE ?';
  } else if (!categoryName) {
    query += ' products.category_id LIKE "%"';
  }

  queryArray.forEach((word) => {
    query = `${query} AND (name LIKE ? OR description LIKE ? )`;
    // push word in replacements array related to both `?` in the query
    replacements.push(`%${word}%`, `%${word}%`);
  });

  query += ' GROUP BY products.id';
  return { query, replacements };
};

const searchProducts = async (req, res) => {
  const { q, category } = req.query;

  const queryAndReplacements = await searchProductsQueryBuilder(q, category);
  const { query, replacements } = queryAndReplacements;

  try {
    const productsArray = await sequelize.query(`${query}`, {
      model: Product,
      replacements,
      type: Sequelize.QueryTypes.SELECT,
    });

    const formatted = formatPricesAndDiscount(productsArray);

    res.status(200).send(formatted);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error in searchProducts controller', err);
    res.status(400).send({ error: 'Search request error.' });
  }
};

export default searchProducts;
