import Sequelize from 'sequelize';
import sequelize from '../../db';
import Category from '../../Schemas/CategoryModel';
import insertNewCategoryProperty from './insertNewCategoryProperty';


const insertNewCategory = async (categoryProperties, name) => {
  //  Create new Category
  const newCategory = await sequelize.query(
    `INSERT INTO categories (name)
    VALUES (:name)
    `,
    {
      model: Category,
      replacements: { name },
      type: Sequelize.QueryTypes.INSERT,
    },
  );

  // Get the id of the created category
  const newCategoryId = newCategory[0];

  // Insert into the DB all the category properties from the array - dynamicaly
  // Promise.all returns a single promise that resolves when all requests are finished
  const createdCategoryProperties = await Promise.all(
    categoryProperties.map(catProperty => insertNewCategoryProperty(catProperty, newCategoryId)),
  );
  const result = { newCategoryId, createdCategoryProperties };
  return result;
};

export default insertNewCategory;
