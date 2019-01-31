const faker = require('faker');

const createFakeUser = () => ({
  password: faker.internet.password(),
  auth_token: faker.random.uuid(),
  email: faker.internet.email(),
  ROLE: faker.random.boolean(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  country: faker.address.country(),
  address: faker.address.streetAddress(),
  zip: faker.address.zipCode(),
  phone: faker.random.number(10),
});
const fakeUsers = [];
const desiredAmout = 50;
/* eslint-disable-next-line */
for (let i = 0; i < desiredAmout; i++) {
  fakeUsers.push(createFakeUser());
}
/* eslint-disable-next-line */
exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('users')
    .del()
    .then(() => (knex('users').insert(fakeUsers)))
);
