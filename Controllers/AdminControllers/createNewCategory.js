import Sequelize from 'sequelize';
import sequelize from '../../db';
import Category from '../../Models/CategoryModel';
import CategoryProperties from '../../Models/Category_PropertiesModel';


const createNewCategory = async (req, res) => {
  const { categoryProperties, name } = req.body;

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
  let insertError = false;

  // Insert all the category properties from the array - dynamicaly
  // Promise.all returns a single promise that resolves when all requests are finished
  await Promise.all(categoryProperties.map(async (propertObj) => {
    const { propertyName, units } = propertObj;
    try {
      await sequelize.query(
        `INSERT INTO category_properties 
        (property_name, units, category_id )
        VALUES ( :propertyName, :units, :newCategoryId )
        `,
        {
          model: CategoryProperties,
          replacements: { propertyName, units, newCategoryId },
          type: Sequelize.QueryTypes.INSERT,
        },
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error in createNewCategory controller', error);
      insertError = true;
    }
  }));

  const requestStatus = insertError ? 500 : 201;
  const responseMessage = insertError ? 'Request Error' : 'OK';
  res
    .status(requestStatus)
    .send(responseMessage);
};

export default createNewCategory;
