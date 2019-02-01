import CONSTANTS from '../../_CONSTANTS';
import sequelize from '../../db';
import Product from '../../Models/ProductModel';
import QUERIES from '../rawqueries';
// const Sequelize = require('sequelize');

const postNewProduct = async (req, res) => {
  /* eslint-disble */
  const {
    name,
    description,
    price,
    discount,
    tags,
    images,
    category_id: categoryId,
    /* eslint-disable-next-line */
    product_properties: productProperties, //this will be used for inserting into the product_props table
  } = req.body;
  /* eslint-disble */
  if (req.method !== 'POST') {
    throw new Error('Improper Method');
  }

  try {
    const { vatRate } = CONSTANTS.vatRate;
    await sequelize.query(`${QUERIES.insertIntoProducts}`,
      {
        model: Product,
        replacements: {
          name,
          description,
          price,
          vatRate,
          discount,
          tags: JSON.stringify(tags),
          images: JSON.stringify(images),
          categoryId,
        },
        type: sequelize.QueryTypes.INSERT,
      });
    // the response is an array with [id#, column#] in the table inserted
    res.status(201)
      .send('Success')
      .end();
  } catch (e) {
    /* eslint-disable-next-line */
    console.log(e);
  }
};

export default postNewProduct;
