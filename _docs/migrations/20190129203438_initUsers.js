
/* eslint-disable */
exports.up = async (knex, Promise) => {
  await knex.schema
  .createTable('categories', categories =>{
    categories
      .increments('id').primary()
      .string('name');
  })
  .createTable('user', user => {
    user
      .increments('id').primary()
      .string('u_password').notNullable()
      .string('auth_token').notNullable()
      .string('email').unique().notNullable()
      .boolean('ROLE')
      .string('first_name').notNullable()
      .string('last_name').notNullable()
      .string('country').notNullable()
      .string('address').notNullable()
      .integer('zip').notNullable()
      .integer('phone').notNullable();
  })
  .createTable('category_properties', category_properties => {
    category_properties
      .increments('id').primary()
      .string('property').notNullable()
      .string('units')
      .integer('category_id')
        .references('id')
        .inTable('categories')
        .notNullable()
        .onDelete('cascade');
  })
  .createTable('ordered_items', ordered_items => {
    ordered_items
      .increments('id').primary()
      .integer('quantity').notNullable()
      .integer('product_id')
        .references('id')
        .inTable('products')
        .notNullable()
        .onDelete('cascade');
  })
  .createTable('orders', orders => {
    orders
      .increments('id').primary()
      .string('order_num').notNullable()
      .string('order_status').notNullable()
      .string('special_instructions')
      .integer('user_id')
        .references('id')
        .inTable('users')
        .notNullable()
        .onDelete('cascade');
  })
  .createTable('product_properties', product_properties => {
    product_properties
      .increments('id').primary()
      .string('property_value').notNullable()
      .integer('product_id')
        .references('id')
        .inTable('products')
        .notNullable()
        .onDelete('cascade')
      .integer('property_id')
        .references('id')
        .inTable('category_properties')
        .notNullable()
        .onDelete('cascade');
  })
  .createTable('products', products => {
    products
      .increments('id').primary()
      .string('name').notNullable()
      .string('description').notNullable()
      .datetime('timestamp', 6)
        .defaultTo(knex.fn.now(6))
        .notNullable()
      .string('image1').notNullable()
      .string('image2')
      .string('image3')
      .decimal('price', 2, 2).notNullable()
      .decimal('discount').defaultTo(0)
      .json('tags')
      .decimal('selling_price', 2, 2)
      .integer('category_id')
        .references('id')
        .inTable('categories')
        .notNullable()
        .onDelete('cascade');
  });
};

exports.down = async (knex, Promise) => {};

/* eslint-enable */
