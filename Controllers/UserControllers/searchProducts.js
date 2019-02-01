import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Models';
import fn from '../../Helpers/utils';

const { Product } = db;

const searchProducts = async (req, res) => {
  const { q, category } = req.query;
  const replacements = [];
  const queryArray = q.split(' ').filter(str => str.length > 0);

  let query = 'SELECT * FROM products WHERE';

  if (category) {
    query += ' category_id LIKE ?';
    replacements.push(1);
  } else if (!category) {
    query += ' category_id LIKE "%"';
  }

  queryArray.forEach((word) => {
    query = `${query} AND (name LIKE ? OR description LIKE ? )`;
    replacements.push(`%${word}%`);
    replacements.push(`%${word}%`);
  });

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

// SELECT * FROM products
// WHERE
//   ( name LIKE '%black%' OR description LIKE '%black%' )
//   AND ( name LIKE '%laptop%' OR description LIKE '%laptop%' )
//   AND ( categoryId = 12 )


// req.params.q.split(' ').map(word => {
//   replacements.push(word)
//   replacements.push(word)
//   `( name LIKE "%?%' OR description LIKE '%?%' )`
