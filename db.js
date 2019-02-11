require('dotenv').config();
const Sequelize = require('sequelize');

// Connect to database
const dbConnection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    logging: false,
    dialect: 'mysql',
  },
);

// Test the connection
dbConnection
  .authenticate()
  .then(() => {
    // eslint-disable-next-line
    console.log(
      `✅ Connection to database ${process.env.DB_NAME} at ${process.env.DB_HOST}:${process.env.DB_PORT} has been established successfully.`,
    );
  })
  .catch((err) => {
    // eslint-disable-next-line
    console.error('❌ Unable to connect to the database: ', err);
  });

// when imported `dbConnection` is imported as `sequelize`
module.exports = dbConnection;
