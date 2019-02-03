import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Schemas';
import formatCategoryProperties from '../../Helpers/formatCategoryProperties';

const { Category } = db;

const retrieveAllCategories = async () => {
  const categories = await sequelize.query(
    `SELECT categories.*,
    GROUP_CONCAT(category_properties.property_name) AS property_names,
    GROUP_CONCAT(category_properties.units) AS property_units
    FROM categories
    LEFT JOIN category_properties
    ON categories.id = category_properties.category_id
    GROUP BY categories.id`,
    {
      model: Category,
      type: Sequelize.QueryTypes.SELECT,
    },
  );
  const formattedCategories = formatCategoryProperties(categories);
  return formattedCategories;
};

export default retrieveAllCategories;
