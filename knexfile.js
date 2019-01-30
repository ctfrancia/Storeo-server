// Update with your config settings.
require('./config/config');

const path = require('path');

module.exports = {
  development: {
    client: 'mysql',
    connection: `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    migrations: {
      directory: path.join(__dirname, './_docs/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, './_docs/seeds'),
    },
  },
  /*
  staging: {
    client: 'mariadb',
    connection: `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    migrations: {
      directory: path.join(__dirname, './_docs/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, './_docs/seeds'),
    },
  },
  test: {
    client: 'postgres',
    connection: `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    migrations: {
      directory: path.join(__dirname, './_docs/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, './_docs/seeds'),
    },
  },
  */
};
