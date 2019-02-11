/* eslint-disable */
exports.seed = (knex, Promise) => (
  knex('category_properties')
    .del()
    //units can be omitted
    .then(() => knex('category_properties').insert([
      { id: 1, property_name: 'Battery Size', units: 0, category_id: 1 },
      { id: 2, property_name: 'Height', units: 'inches', category_id: 1 },
      { id: 3, property_name: 'Width', units: 'mm', category_id: 2 },
      { id: 4, property_name: 'Max Speed', units: 'mph', category_id: 2 },
      { id: 5, property_name: 'Max Speed', units: 'kph', category_id: 3 },
      { id: 6, property_name: 'Width', units: 'meters', category_id: 1 },
      { id: 7, property_name: 'Height', units: 'dm', category_id: 5 },
      { id: 8, property_name: 'Screen Size', units: 'pulgas', category_id: 5 },
      { id: 9, property_name: 'Width', units: 'cm', category_id: 4 },
      { id: 10, property_name: 'Width', units: 'yards', category_id: 5 }
    ]))
);
