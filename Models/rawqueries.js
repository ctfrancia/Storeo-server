import CONSTANTS from '../_CONSTANTS';

const QUERIES = {
  getCategoryPropertyName: 'SELECT * from category_properties where category_id = :category_id',
  insertIntoProducts: `INSERT INTO products
            (  name,  description,  price,  vat_rate,  discount,  tags,  images,  category_id)
      VALUES( :name, :description, :price, ${CONSTANTS.vatRate}, :discount, :tags, :images, :category_id)
      `,
  insertIntoProductProperties: `INSERT INTO product_properties
            (category_id, property_name, units, property_value, product_id)
    VALUES ( :category_id, :property_name, :units, :property_value, :productId)
  `,
  insertIntoCategoryProperties: `INSERT INTO category_properties
                                (property_name, units, category_id)
                        VALUES (:property_name, :units, :id)`,
  updateProduct: `UPDATE products SET name = :name,
                  description = :description,
                  price = :price,
                  vat_rate = ${CONSTANTS.vatRate},
                  discount = :discount,
                  tags = :tags,
                  images = :images,
                  category_id = :category_id
                  WHERE id = :productId;`,

  updateCategory: 'UPDATE categories SET name = :name, description = :description, image = :image  WHERE id = :id',
  updateProductProperties: `UPDATE product_properties SET
                            category_id = :category_id,
                            property_name = :property_name,
                            units = :unit,
                            property_value = :property_value
                            WHERE product_id = :productId;`,
  updateProductProperty: `UPDATE product_properties SET
                          property_value = :property_value
                          WHERE product_id = :productId
                          AND category_id = :category_id
                          AND property_name = :property_name`,
  deleteProductProperties: 'DELETE FROM product_properties WHERE product_id = :productId',
  deleteProductById: 'DELETE FROM products WHERE id = :productId',
  deleteCategoryById: `DELETE FROM categories
                        WHERE id = :id`,
  deleteCategoryProperties: 'DELETE FROM category_properties WHERE category_id = :id',

};

export default QUERIES;
