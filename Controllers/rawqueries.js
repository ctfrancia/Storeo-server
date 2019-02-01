import CONSTANTS from '../_CONSTANTS';

const QUERIES = {
  insertIntoProducts: `INSERT INTO products
            (  name,  description,  price,  vat_rate,  discount,  tags,  images,  category_id)
      VALUES( :name, :description, :price, ${CONSTANTS.vatRate},  :discount, :tags, :images, :categoryId)
      `,
  insertIntoProductProperties: `INSERT INTO product_properties
            (category_id, property_name, units, property_value, product_id)
    VALUES ( :category_id, :property_name, :units, :property_value, :product_id)
  `,
  updateProduct: `UPDATE products SET name = :name,
                  description = :description,
                  price = :price,
                  vat_rate = ${CONSTANTS.vatRate},
                  discount = :discount,
                  tags = :tags,
                  images = :images,
                  category_id = :categoryId
                  WHERE id = :productToUpdate;`,

  updateProductProperties: `UPDATE product_properties SET
                            category_id = :category_id,
                            property_name = :property_name,
                            units = :units,
                            property_value = :property_value
                            WHERE product_id = :fkProductId;`,
};

export default QUERIES;
