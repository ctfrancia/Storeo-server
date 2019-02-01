import CONSTANTS from '../_CONSTANTS';
// ${CONSTANTS.vatRate} with and without :
const QUERIES = {
  insertIntoProducts: `INSERT INTO products
            (  name,  description,  price,  vat_rate,  discount,  tags,  images,  category_id)
      VALUES( :name, :description, :price, ${CONSTANTS.vatRate},  :discount, :tags, :images, :categoryId)
      `,
  insertIntoProductProperties: `INSERT INTO product_properties
            (category_id, property_name, units, property_value)
    VALUES ( :category_id, :property_name, :units, :property_value)
  `,
};

export default QUERIES;
