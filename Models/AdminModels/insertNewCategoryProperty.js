import Sequelize from 'sequelize';
import sequelize from '../../db';
import CategoryProperties from '../../Schemas/Category_PropertiesModel';

const insertNewCategoryProperty = (propertObj, categoryId) => {
  const { property_name: propertyName, units } = propertObj;

  return sequelize.query(
    `INSERT INTO category_properties
    (property_name, units, category_id )
    VALUES ( :propertyName, :units, :categoryId )
    `,
    {
      model: CategoryProperties,
      replacements: { propertyName, units, categoryId },
      type: Sequelize.QueryTypes.INSERT,
    },
  );
};

export default insertNewCategoryProperty;
