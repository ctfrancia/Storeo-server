require('dotenv').config();
const Sequelize = require('sequelize');
/* eslint-disable */
//FIXME: when commenting out config can no longer connect to external db
const config = require('./config/config');
/* eslint-enable */
// Create the url based on the config file .env in the root directory
// const DB_URL = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.HOST}:${
//   process.env.DB_PORT
// }/${process.env.DB_NAME}`;
// console.log('DB URL!!!!!!!!!!!!!!!!!!!!!!!!!!!!', DB_URL);

// const connect = () => {
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

dbConnection
  .authenticate()
  .then(() => {
    // eslint-disable-next-line
    console.log(
      `✅ Connection to database ${process.env.DB_NAME} at ${process.env.DB_HOST}:${
        process.env.DB_PORT
      } has been established successfully.`,
    );
  })
  .catch((err) => {
    // eslint-disable-next-line
    console.error('❌ Unable to connect to the database: ', err);
  });

//   return dbConnection;
// };

module.exports = dbConnection;
