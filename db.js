const Sequelize = require('sequelize');

// Create the url based on the config file .env in the root directory
const DB_URL = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.HOST}:${
  process.env.DB_PORT
}/${process.env.DB_NAME}`;

const connect = () => {
  // Connect to database
  const dbConnection = new Sequelize(DB_URL, {
    logging: false,
  });

  dbConnection
    .authenticate()
    .then(() => {
      // eslint-disable-next-line
      console.log(
        `✅ Connection to database ${process.env.DB_NAME} at ${process.env.HOST}:${
          process.env.DB_PORT
        } has been established successfully.`,
      );
    })
    .catch((err) => {
      // eslint-disable-next-line
      console.error('❌ Unable to connect to the database: ', err);
    });

  return dbConnection;
};

module.exports = () => connect();
