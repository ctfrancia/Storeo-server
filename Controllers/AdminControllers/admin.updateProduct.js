import CONSTANTS from '../../_CONSTANTS';
import QUERIES from '../rawqueries';
import sequelize from '../../db';
import Product from '../../Models/ProductModel';
import pP from '../../Models/Product_PropertiesModel';

const updateProduct = async (req, res) => {
  /* eslint-disable */
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

  const fkProductId = req.body.product_properties[0].product_id;
  /* eslint-enable */
  const productToUpdate = req.params.productId;
  if (req.method !== 'PUT') throw new Error('Incorrect Method');

  try {
    const { vatRate } = CONSTANTS.vatRate;
    await sequelize
      .query(`${QUERIES.updateProduct}`, {
        model: Product,
        replacements: {
          productToUpdate,
          name,
          description,
          price,
          vatRate,
          discount,
          tags: JSON.stringify(tags),
          images: JSON.stringify(images),
          categoryId,
        },
        type: sequelize.QueryTypes.UPDATE,
      });
    if (!fkProductId) res.status(400).send('missing product_id');
    console.log(fkProductId);

    await Promise.all(
      productProperties.map(obj => sequelize
        .query(`${QUERIES.updateProductProperties}`, {
          model: pP,
          replacements: {
            category_id: obj.category_id,
            property_name: obj.property_name,
            units: obj.units,
            property_value: obj.property_value,
            fkProductId,
          },
          type: sequelize.QueryTypes.UPDATE,
        })),
    );

    res.status(202).send('Update successful');
  } catch (e) {
    /* eslint-disable-next-line */
    console.log(e);
    res.status(500).send('Something went wrong, sorry!');
  }
};
export default updateProduct;
