const faker = require('faker');

const createFakeProductPropertyValues = () => ({
  property_value: faker.commerce.productAdjective(),
});
const fakePPV = [];
const desiredAmout = 50;

for (let i = 0; i < desiredAmout; i++) {
  fakePPV.push(createFakeProductPropertyValues());
}

exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('product_property_values')
    .del()
    .then(() => (
      // Inserts seed entries
      knex('product_property_values').insert(fakePPV)
    ))
);
