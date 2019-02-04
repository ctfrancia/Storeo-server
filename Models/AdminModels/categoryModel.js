import sequelize from '../../db';
import QUERIES from '../rawqueries';

async function updateCategory(toChange, id) {
  // const { name, description, image } = toChange;
  const categoryProps = toChange.category_properties;
  console.log(toChange.name);
  // delete the category properties
  await sequelize.query(`${QUERIES.deleteCategoryProperties}`, {
    replacements: {
      id,
    },
    type: sequelize.QueryTypes.DELETE,
  });
  // // insert them back in the database
  await Promise.all(
    categoryProps.map(prop => sequelize.query(`${QUERIES.insertIntoCategoryProperties}`, {
      replacements: {
        property_name: prop.property_name,
        units: prop.units,
        id,
      },
    })),
  );
  // now update the category in question
  await sequelize.query(`${QUERIES.updateCategory}`, {
    replacements: {
      name: toChange.name,
      description: toChange.description,
      image: toChange.image,
      id,
    },
  });
}

const categoryModel = {
  updateCategory,
};
export default categoryModel;
