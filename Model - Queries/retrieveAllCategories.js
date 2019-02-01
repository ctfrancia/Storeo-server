import Sequelize from 'sequelize';
import sequelize from '../db';
import { db } from '../Models';

const { Category } = db;

const retrieveAllCategories = async () => {
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
  const formattedCategories = categories.map(category => Object.assign(category,
    {
      property_names: category.property_names.split(','),
      property_units: category.property_units.split(','),
    }));
  return formattedCategories;
};

export default retrieveAllCategories;
