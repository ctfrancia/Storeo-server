import CategoryModel from '../../Models/CategoryModel';
import sequelize from '../../db';

const getAllCategories = (req, res) => {
  sequelize
    .query('SELECT * FROM categories', { model: CategoryModel })
    .then((categories) => {
      res.status(200).send(categories);
    })
    .catch((err) => {
      //  eslint-disable-next-line
      console.log('Error in getAllCategories Controller =>', err);
      res /*  */
        .status(401)
        .send('Unable to retrieve categories.');
    });
};

export default getAllCategories;
