const faker = require('faker');

const createFakeCategories = () => ({
  name: faker.commerce.product(),
});
const fakeCategories = [];
const desiredAmout = 50;
/* eslint-disable-next-line */
for (let i = 0; i < desiredAmout; i++) {
  fakeCategories.push(createFakeCategories());
}
/* eslint-disable-next-line */
exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('categories')
    .del()
    .then(() => (knex('categories').insert(fakeCategories)))
);
