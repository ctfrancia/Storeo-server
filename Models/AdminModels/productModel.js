import sequelize from '../../db';
import CONSTANTS from '../../_CONSTANTS';
import QUERIES from '../rawqueries';

function deleteProduct(productId) {
  sequelize.query(`${QUERIES.deleteProductById}`, {
    replacements: { productId },
    type: sequelize.QueryTypes.DELETE,
  });
}

const addProduct = async (toBeInserted) => {
  // first query the db to see if the product already exists;

  const exists = await sequelize.query(
    `SELECT name FROM products WHERE name = "${toBeInserted.name}"`,
  );

  // if there is a length then we know that the product with the name already exists
  if (exists[0].length === 1) return true;

  return sequelize.query(`${QUERIES.insertIntoProducts}`, {
    replacements: {
      name: toBeInserted.name,
      description: toBeInserted.description,
      price: toBeInserted.price,
      vat_rate: CONSTANTS.vatRate,
      discount: toBeInserted.discount,
      tags: JSON.stringify(toBeInserted.tags),
      images: JSON.stringify(toBeInserted.images),
      category_id: toBeInserted.category_id,
    },
    type: sequelize.QueryTypes.INSERT,
  });
};

function addToProductProperties(toBeInserted, productId) {
  const productProperties = toBeInserted;
  // const unitChecker = toBeInserted.units === '' ? null : toBeInserted.units;
  return Promise.all(
    productProperties.map(props => sequelize.query(`${QUERIES.insertIntoProductProperties}`, {
      replacements: {
        category_id: props.category_id,
        property_name: props.property_name,
        units: props.units,
        property_value: props.property_value,
        productId,
      },
    })),
  );
}

function updateProduct(toInsert, productId) {
  return sequelize.query(`${QUERIES.updateProduct}`, {
    replacements: {
      productId,
      name: toInsert.name,
      description: toInsert.description,
      price: toInsert.price,
      vat_rate: CONSTANTS.vatRate,
      discount: toInsert.discount,
      tags: JSON.stringify(toInsert.tags),
      images: JSON.stringify(toInsert.images),
      category_id: toInsert.category_id,
    },
    type: sequelize.QueryTypes.INSERT,
  });
}

async function updateProductProperties(toInsert, productId) {
  // delete all the product properties
  await sequelize.query(`${QUERIES.deleteProductProperties}`, {
    replacements: { productId },
    type: sequelize.QueryTypes.DELETE,
  });
  // after deletion put it back in the database
  await Promise.all(
    toInsert.map(props => sequelize.query(`${QUERIES.insertIntoProductProperties}`, {
      replacements: {
        category_id: props.category_id,
        property_name: props.property_name,
        units: props.units,
        property_value: props.property_value,
        productId,
      },
    })),
  );
}

const productModel = {
  addProduct,
  addToProductProperties,
  updateProduct,
  updateProductProperties,
  deleteProduct,
};
export default productModel;
