const faker = require('faker');

/* eslint-disable-next-line */
exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('users')
    .del()
  /* eslint-disable */
    .then(() => (knex('users').insert([
      { id: 1, password: faker.random.uuid(), auth_token: faker.random.uuid(), email: faker.internet.email(), role: true, first_name: 'Christian', last_name: 'Francia', address: '213 smith st', country: 'Spain', zip: 12355, phone: 12312312 },
      { id: 2, password: faker.random.uuid(), auth_token: faker.random.uuid(), email: faker.internet.email(), role: false, first_name: 'Luca' , last_name: 'Panzavolta', address: '245 hollow st', country: 'Italy', zip: 523452, phone: 213123 },
      { id: 3, password: faker.random.uuid(), auth_token: faker.random.uuid(), email: faker.internet.email(), role: false, first_name: 'Uros' , last_name: 'Seras', address: '99 main st', country: 'Serbia', zip: 23451, phone: 3241231 },
      { id: 4, password: faker.random.uuid(), auth_token: faker.random.uuid(), email: faker.internet.email(), role: false, first_name: 'Zain' , last_name: 'Sayed', address: '56 grape rd', country: 'United Kingdom', zip: 6573, phone: 13412346 },
      { id: 5, password: faker.random.uuid(), auth_token: faker.random.uuid(), email: faker.internet.email(), role: false, first_name: 'Tomasz' , last_name: 'Ciroc', address: '5656 hollywood blvd', country: 'Poland', zip: 3423, phone: 3241324 },
      { id: 6, password: faker.random.uuid(), auth_token: faker.random.uuid(), email: faker.internet.email(), role: false, first_name: 'Gabe' , last_name: 'Asedy', address: '987 west street', country: 'Canada', zip: 12344, phone: 123413246 },
      { id: 7, password: faker.random.uuid(), auth_token: faker.random.uuid(), email: faker.internet.email(), role: false, first_name: 'Edward' , last_name: 'Satin', address: '987 east st', country: 'Germany', zip: 324677, phone: 423452345 },
      { id: 8, password: faker.random.uuid(), auth_token: faker.random.uuid(), email: faker.internet.email(), role: false, first_name: 'Radley' , last_name: 'Smith', address: '235 great street', country: 'Australia', zip: 234111, phone: 45243908},
      { id: 9, password: faker.random.uuid(), auth_token: faker.random.uuid(), email: faker.internet.email(), role: false, first_name: 'Franz', last_name: 'Schmidt', address: '2387 important st', country: 'Autria', zip: 234, phone: 483024},
      { id: 10, password: faker.random.uuid() , auth_token: faker.random.uuid() , email: faker.internet.email(), role: false, first_name: 'Julia', last_name: 'Schwinsteiger', address: '83274 height st', country: 'germany', zip: 4455555, phone: 87209857},
    ])))
);
