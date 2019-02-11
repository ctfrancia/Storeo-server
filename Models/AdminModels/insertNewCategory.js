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

  // SELECT name FROM categories WHERE name = "${name}"
  //  querying db to retrieve all values under the category table where the name is equal to ${name}
  const answer = await sequelize.query(`SELECT name FROM categories WHERE name = "${name}"`,
    sequelize.QueryTypes.SELECT);

  // testing to see if the row exists with the name = ${name}
  if (answer[0].length === 1) return true;

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
