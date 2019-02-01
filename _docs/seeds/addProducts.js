const faker = require('faker');

const createFakeProducts = () => ({
  name: faker.commerce.productName(),
  description: faker.lorem.sentence(),
  tags: JSON.stringify(`${faker.commerce.productAdjective()},
  ${faker.commerce.productAdjective()},
  ${faker.commerce.productAdjective()}`),
  images: JSON.stringify(`${faker.image.imageUrl()},
          ${faker.image.imageUrl()}`),
  discount: faker.random.number(0),
  price: faker.commerce.price(),
});
const fakeProducts = [];
const desiredAmout = 50;

/* eslint-disable-next-line */
for (let i = 0; i < desiredAmout; i++) {
  fakeProducts.push(createFakeProducts());
}
/* eslint-disable-next-line */
exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('products')
    .del()
    .then(() => (knex('products').insert(fakeProducts)))
);
