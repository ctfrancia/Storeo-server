
/* eslint-disable */
exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('categories')
    .del()
    .then(() => (knex('categories').insert([
      { id: 1, name: 'Electronics', description: 'Super cool electronics', image: 'http://www.coolimage.com' },
      { id: 2, name: 'Cars', description: 'Super fast cars', image: 'http://www.coolimage.com' },
      { id: 3, name: 'Motorcycles', description: 'Super cool motorcycles', image: 'http://www.coolimage.com' },
      { id: 4, name: 'Bicycles', description: 'Super fixies', image: 'http://www.coolimage.com' },
      { id: 5, name: 'Laptops', description: 'Super cool laptops', image: 'http://www.coolimage.com' }
    ])))
);
