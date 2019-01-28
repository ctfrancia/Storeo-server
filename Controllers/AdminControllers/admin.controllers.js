const adminDB = require('../../Models/admin.model');

exports.getAllCategories = (req, res, next) => {
  res
    .status(200)
    .send('hello')
    .end();
};

// export default { getAllCategories };
