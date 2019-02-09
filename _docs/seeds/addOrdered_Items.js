/* eslint-disable */
exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('ordered_items')
    .del()
    .then(() => (knex('ordered_items').insert([
      { id: 1, order_id: 1, product_id: 1, quantity: 1 },
      { id: 2, order_id: 2, product_id: 2, quantity: 32 },
      { id: 3, order_id: 3, product_id: 2, quantity: 2 },
      { id: 4, order_id: 3, product_id: 4, quantity: 3 },
      { id: 5, order_id: 2, product_id: 3, quantity: 3 },
      { id: 6, order_id: 4, product_id: 5, quantity: 3 },
    ])))
);
