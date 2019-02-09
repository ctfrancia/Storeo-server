import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Schemas';
import searchProductsQueryBuilder from '../../Helpers/searchProductsQueryBuilder';
import formatProductProperties from '../../Helpers/formatProductProperties';

const { Product } = db;


const retrieveProductsBySearchQuery = async (q, category) => {
  // Query DB for a "category Id", create a replacements array and a "search query" string
  const queryAndReplacements = await searchProductsQueryBuilder(q, category);
  const { query, replacements } = queryAndReplacements;

  const productsArray = sequelize.query(`${query}`, {
    model: Product,
    replacements,
    type: Sequelize.QueryTypes.SELECT,
  });

  const formatted = formatProductProperties(productsArray);
  return formatted;
};


export default retrieveProductsBySearchQuery;
