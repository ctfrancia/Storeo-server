import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Models';

const { Category } = db;

const getAllCategories = async (req, res) => {
  try {
    const categories = await sequelize.query(
      `SELECT categories.id, categories.name, 
       GROUP_CONCAT(category_properties.property_name) AS property_names, 
       GROUP_CONCAT(category_properties.units) AS property_units
       FROM categories, category_properties
       WHERE categories.id = category_properties.category_id GROUP BY categories.id;`,
      {
        model: Category,
        type: Sequelize.QueryTypes.SELECT,
      },
    );
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
