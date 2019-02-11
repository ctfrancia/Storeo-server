/* eslint-disable */
exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('products')
    .del()
    .then(() => (knex('products').insert([
      { id: 1, name: 'Cheese', description: 'Some intersting text here', price: 123, vat_rate: 10.5, tags: ["cool", "very" , "yes"], Images: ["www.catpictures.com","www.morecatpictures.com"], category_id: 1 },
      { id: 2, name: 'Macbook', description: 'Some intersting text here', price: 23, vat_rate: 10.5, tags: ["cool", "awesome" , "no"], Images: ["www.catpictures.com","www.morecatpictures.com"], category_id: 2 },
      { id: 3, name: 'BMW', description: 'Some intersting text here', price: 11231231231, vat_rate: 10.5, tags: ["cool", "unique" , "cool"], Images: ["www.catpictures.com","www.morecatpictures.com"], category_id: 3 },
      { id: 4, name: 'Cinelli', description: 'Some intersting text here', price: 32153453, vat_rate: 10.5, tags: ["cool", "fast" , "Barcelona"], Images: ["www.catpictures.com","www.morecatpictures.com"], category_id: 1 },
      { id: 5, name: 'Lenovo', description: 'Some intersting text here', price: 1211, vat_rate: 10.5, tags: ["cool", "ping pong master" , "Javascript"], Images: ["www.catpictures.com","www.morecatpictures.com"], category_id: 5 },
      { id: 6, name: 'Audi', description: 'Some intersting text here', price: 33333, vat_rate: 10.5, tags: ["cool", "smelly" , "Other"], Images: ["www.catpictures.com","www.morecatpictures.com"], category_id: 4 },
      { id: 7, name: 'iPhone', description: 'Some intersting text here', price: 67469, vat_rate: 10.5, tags: ["cool", "cool" , "long"], Images: ["www.catpictures.com","www.morecatpictures.com"], category_id: 2 },
    ])))
);
