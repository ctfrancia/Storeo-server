const faker = require('faker');

const createFakeOrderedItems = () => ({
  quantity: faker.random.number(),
});
const fakeOrderedItems = [];
const desiredAmout = 50;

for (let i = 0; i < desiredAmout; i++) {
  fakeOrderedItems.push(createFakeOrderedItems());
}

exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('ordered_items')
    .del()
    .then(() => knex('ordered_items').insert(fakeOrderedItems))
);
