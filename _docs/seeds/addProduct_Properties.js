/* eslint-disable */
exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('product_properties')
    .del()
    // units may be omitted
    .then(() => (knex('product_properties').insert([
      { id: 1, category_id: 1, property_name: 'Screen Size', units: 'inches', property_value: 10, product_id: 1 },
      { id: 2, category_id: 1, property_name: 'Width', units: 'meters', property_value: 2, product_id: 2 },
      { id: 3, category_id: 1, property_name: 'Height', units: 'inches', property_value: 25, product_id: 3 },
      { id: 4, category_id: 2, property_name: 'Color', units: 0, property_value: 'Blue', product_id: 4 },
      { id: 5, category_id: 3, property_name: 'Max Speed', units: 'mph', property_value: 43, product_id: 5 },
      { id: 6, category_id: 4, property_name: 'Width', units: 'mm', property_value: 22, product_id: 1 },
      { id: 7, category_id: 5, property_name: 'Max Speed', units: 'kph', property_value: 205, product_id: 1 },
      { id: 8, category_id: 2, property_name: 'Width', units: 'dm', property_value: 5, product_id: 2 },
      { id: 9, category_id: 4, property_name: 'Height', units: 'pixels', property_value: 1098, product_id: 3 },
      { id: 10, category_id: 3, property_name: 'Battery Size', property_value: 456, product_id: 4 },
      { id: 11, category_id: 2, property_name: 'Height', units: 'km', property_value: 5, product_id: 5 }
    ])))
);
