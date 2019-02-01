import CONSTANTS from '../../_CONSTANTS';
import sequelize from '../../db';
import Product from '../../Models/ProductModel';
import pP from '../../Models/Product_PropertiesModel';
import QUERIES from '../rawqueries';

let wasWritten = false;
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
    await sequelize
      .query(`${QUERIES.insertIntoProducts}`, {
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
      .then(() => {
        wasWritten = true;
      })
      .catch((e) => {
        /* eslint-disable-next-line */
        console.log(e);
        wasWritten = false;
      });
    try {
      await Promise.all(
        productProperties.map(obj => sequelize
          .query(`${QUERIES.insertIntoProductProperties}`, {
            model: pP,
            replacements: {
              category_id: obj.category_id,
              property_name: obj.property_name,
              units: obj.units,
              property_value: obj.property_value,
            },
            type: sequelize.QueryTypes.INSERT,
          })
          .then(() => {
            wasWritten = true;
          })
          .catch(() => {
            wasWritten = false;
          })),
      );
    } catch (e) {
      /* eslint-disable-next-line */
      console.log(e);
    }
    if (wasWritten) {
      res
        .status(201)
        .send('Success')
        .end();
    } else {
      res
        .status(500)
        .send('Was unable to save correctly, please try again later')
        .end();
    }
  } catch (e) {
    // the response is an array with [id#, column#]
    /* eslint-disable-next-line */
    console.log(e);
  }
};

export default postNewProduct;
