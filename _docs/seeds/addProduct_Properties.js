const faker = require('faker');

const createFakeProductPropertyValues = () => ({
  property_value: faker.commerce.productAdjective(),
});
const fakePV = [];
const desiredAmout = 50;
/* eslint-disable-next-line */
for (let i = 0; i < desiredAmout; i++) {
  fakePV.push(createFakeProductPropertyValues());
}
/* eslint-disable-next-line */
exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('product_property_values')
    .del()
    .then(() => knex('product_property_values').insert(fakePV))
);
