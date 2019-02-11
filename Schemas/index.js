const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const baseName = path.basename(__filename);
const db = {};
const env = process.env.NODE_ENV || 'development';
/* eslint-disable */
const config = require(path.resolve(__dirname, './../config/config.js'))[env];
// console.log('sdfasdfadsfasdfadsfafda', config);

/* eslint-enable */
db.setup = () => {
  let sequelize;
  if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
  } else {
    sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config,
    );
  }
  // populate the db with EACH file we have for a model!!!
  fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== baseName) && (file.slice(-3) === '.js'))
    .forEach((file) => {
      const model = sequelize.import(path.join(__dirname, file));
      db[model.name] = model;
    });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  sequelize.sync({ logging: false });
};

module.exports = {
  db,
};
