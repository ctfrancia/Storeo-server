import CONSTANTS from '../../_CONSTANTS';
import sequelize from '../../db';
import Product from '../../Models/ProductModel';
import pP from '../../Models/Product_PropertiesModel';
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
    product_properties: productProperties,
  } = req.body;

  /* eslint-disble */
  if (req.method !== 'POST') {
    throw new Error('Improper Method');
  }

  try {
    const { vatRate } = CONSTANTS.vatRate;
    const wasWrittenTest1 = await sequelize.query(`${QUERIES.insertIntoProducts}`,
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
      })
      .then(() => true);
    // consoling wasWrittenTest1 comes back as true

    if (wasWrittenTest1 === true) {
      await Promise.all(productProperties.map(
        async (obj) => {
          // console.log(obj);
          const answer = await sequelize.query(`${QUERIES.insertIntoProducts}`,
            {
              model: pP,
              replacements: {
                category_id: obj.category_id,
                property_name: obj.property_name,
                units: obj.units,
                property_value: obj.property_value,
              },
              type: sequelize.QueryTypes.INSERT,
            })
            .then(() => true);
          return answer;
        },
      ));
    }
    // console.log('asdfhasdkjhfasjhdf', wasWrittenTest2);

    if (wasWrittenTest1) {
      res.status(201)
        .send('Success')
        .end();
    } else {
      res
        .status(500)
        .send("Don't know bro but something happened")
        .end();
    }
  } catch (e) {
  // the response is an array with [id#, column#]
    // console.log(e);
  }
};

export default postNewProduct;
