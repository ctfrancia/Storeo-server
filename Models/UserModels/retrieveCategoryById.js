import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Schemas';
import formatCategoryProperties from '../../Helpers/formatCategoryProperties';

const { Category } = db;

const retrieveCategoryById = async (categoryId) => {
  const [category] = await sequelize.query(
    `SELECT categories.id, categories.name,
     GROUP_CONCAT(category_properties.property_name) AS property_names,
     GROUP_CONCAT(category_properties.units) AS property_units
     FROM categories, category_properties
     WHERE categories.id = ${categoryId} AND categories.id = category_properties.category_id GROUP BY categories.id;`,
    {
      model: Category,
      type: Sequelize.QueryTypes.SELECT,
    },
  );
  const [formattedCategory] = formatCategoryProperties([category]);
  return [formattedCategory];
};

export default retrieveCategoryById;
