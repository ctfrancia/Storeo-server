const faker = require('faker');

/* eslint-disable */
exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('orders')
    .del()
    .then(() => (knex('orders').insert([
      { id: 1, order_num: faker.random.uuid(), order_status: faker.random.boolean(), special_instructions: 'Insert some special instructions here', total: faker.random.number(200), user_id: 1 },
      { id: 2, order_num: faker.random.uuid(), order_status: faker.random.boolean(), special_instructions: 'Insert some special instructions here', total: faker.random.number(200), user_id: 2 },
      { id: 3, order_num: faker.random.uuid(), order_status: faker.random.boolean(), special_instructions: 'Insert some special instructions here', total: faker.random.number(200), user_id: 3 },
      { id: 4, order_num: faker.random.uuid(), order_status: faker.random.boolean(), special_instructions: 'Insert some special instructions here', total: faker.random.number(200), user_id: 4 },
      { id: 5, order_num: faker.random.uuid(), order_status: faker.random.boolean(), special_instructions: 'Insert some special instructions here', total: faker.random.number(200), user_id: 3 },
      { id: 6, order_num: faker.random.uuid(), order_status: faker.random.boolean(), special_instructions: 'Insert some special instructions here', total: faker.random.number(200), user_id: 5 },
      { id: 7, order_num: faker.random.uuid(), order_status: faker.random.boolean(), special_instructions: 'Insert some special instructions here', total: faker.random.number(200), user_id: 6 },
    ])))
);
