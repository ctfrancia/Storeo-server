const faker = require('faker');

const createFakeOrders = () => ({
  order_num: faker.random.uuid(),
  order_status: faker.random.boolean(),
  special_instructions: faker.lorem.sentence(),
});

const fakeOrders = [];
const desiredAmout = 50;

for (let i = 0; i < desiredAmout; i++) {
  fakeOrders.push(createFakeOrders());
}
exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('orders')
    .del()
    .then(() => knex('orders').insert(fakeOrders))
);
