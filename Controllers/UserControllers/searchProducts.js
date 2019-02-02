import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Models';
import fn from '../../Helpers/utils';

const { Product } = db;

const searchProductsQuery = async (queryPhrase, categoryName) => {
  const replacements = [];
  const queryArray = queryPhrase.split(' ').filter(str => str.length > 0);

  // First part of the query string
  let query = 'SELECT * FROM products WHERE';
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
    query += ' category_id LIKE ?';
  } else if (!categoryName) {
    query += ' category_id LIKE "%"';
  }

  queryArray.forEach((word) => {
    query = `${query} AND (name LIKE ? OR description LIKE ? )`;
    // push the word in replacements array related to both `?` in the query
    replacements.push(`%${word}%`, `%${word}%`);
  });

  return { query, replacements };
};

const searchProducts = async (req, res) => {
  const { q, category } = req.query;


  const queryAndReplacements = await searchProductsQuery(q, category);
  const { query, replacements } = queryAndReplacements;

  try {
    const productsArray = await sequelize.query(
      `${query}`,
      {
        model: Product,
        replacements,
        type: Sequelize.QueryTypes.SELECT,
      },
    );

    const formatted = fn.stringifyPricesAndDiscount(productsArray);

    res
      .status(200)
      .send(formatted);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error in searchProducts controller', err);
    res
      .status(400)
      .send({ error: 'Search request error.' });
  }
};


export default searchProducts;
