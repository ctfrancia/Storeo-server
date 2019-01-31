import Sequelize from 'sequelize';

import Category from '../../Models/CategoryModel';
import sequelize from '../../db';


const createNewCategory = async (req, res) => {
  const {
    category_propertes: categoryProps,
    name: categoryName,
  } = req.body;
  try {
    const newCategory = await sequelize.query(
      `INSERT INTO categories (name)
       VALUES ( :categoryName)
      `,
      {
        model: Category,
        replacements: { categoryName },
        type: Sequelize.QueryTypes.INSERT,
      },
    );

    //  GET ID from the created newCategory
    const { property_name: propName, units } = categoryProps;

    const insertProperties = await sequelize.query(
      `INSERT INTO category_properties 
      (property_name, units, category_id )
      VALUES ( :propName, :units, :categoryId )
      `,
    );
  } catch (error) {

  }
};

export default createNewCategory;
