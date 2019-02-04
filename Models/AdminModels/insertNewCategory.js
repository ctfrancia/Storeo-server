import Sequelize from 'sequelize';
import sequelize from '../../db';
import Category from '../../Schemas/CategoryModel';
import insertNewCategoryProperty from './insertNewCategoryProperty';


const insertNewCategory = async (data) => {
  const {
    category_properties: categoryProperties,
    name,
    description,
    image,
  } = data;

  //  Create new Category
  const newCategory = await sequelize.query(
    `INSERT INTO categories (name, description, image)
    VALUES (:name, :description, :image);
    `,
    {
      model: Category,
      replacements: {
        name,
        description,
        image,
      },
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
