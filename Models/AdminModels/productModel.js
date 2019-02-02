import sequelize from '../../db';
import CONSTANTS from '../../_CONSTANTS';
import QUERIES from '../rawqueries';

function addProduct(toBeInserted) {
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
}

function addToProductProperties(toBeInserted, productFK) {
  const productProperties = toBeInserted;
  return Promise.all(
    productProperties.map(props => sequelize.query(`${QUERIES.insertIntoProductProperties}`, {
      replacements: {
        category_id: props.category_id,
        property_name: props.property_name,
        units: props.units,
        property_value: props.property_value,
        product_id: productFK,
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

function updateProductProperties(productProperties, productId) {
  return Promise.all(
    productProperties.map(props => sequelize.query(`${QUERIES.updateProductProperties}`, {
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
};
export default productModel;
