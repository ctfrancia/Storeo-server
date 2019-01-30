import Category from '../../Models/CategoryModel';
import sequelize from '../../db';

const getAllCategories = async (req, res) => {
  try {
    const categories = await sequelize.query('SELECT * FROM categories', { model: Category });
    res
      .status(200)
      .send(categories);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getAllCategories Controller =>', err);
    res
      .status(401)
      .send('Impossible to retrieve categories.');
  }
};

export default getAllCategories;
