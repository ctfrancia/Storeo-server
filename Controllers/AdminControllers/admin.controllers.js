const adminDB = require('../../Models/admin.model');

exports.getAllCategories = (req, res, next) => {
  adminDB();
  req();
  res
    .status(200)
    .send('hello')
    .end();
  next();
};

// export default { getAllCategories };
