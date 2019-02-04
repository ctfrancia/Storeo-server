import sequelize from '../../db';
import QUERIES from '../rawqueries';

async function updateCategory(toChange, id) {
  // this mapping over the units can be made to a helper function
  const categoryProps = toChange.category_properties.map((prop) => {
    const unit = (!prop.units) ? '' : prop.units;
    return Object.assign({}, {
      category_id: prop.category_id,
      property_name: prop.property_name,
      units: unit,
      property_value: prop.property_value,
    });
  });

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
