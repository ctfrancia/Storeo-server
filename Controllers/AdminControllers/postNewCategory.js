import Sequelize from 'sequelize';
import sequelize from '../../db';
import Category from '../../Schemas/CategoryModel';
import CategoryProperties from '../../Schemas/Category_PropertiesModel';

const insertPropertyIntoCategory = (propertObj, categoryId) => {
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

const createNewCategory = async (req, res) => {
  const { category_properties: categoryProperties, name } = req.body;

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

  let requestStatus = 201;
  let responseMessage;

  // Insert all the category properties from the array - dynamicaly
  // Promise.all returns a single promise that resolves when all requests are finished
  try {
    await Promise.all(
      categoryProperties.map(catProperty => insertPropertyIntoCategory(catProperty, newCategoryId)),
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error in createNewCategory controller', error);
    requestStatus = 500;
    responseMessage = { error: 'Request Error' };
  }

  res.status(requestStatus).send(responseMessage);
};

export default createNewCategory;
