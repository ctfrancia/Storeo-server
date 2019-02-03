import sequelize from '../../db';
import QUERIES from '../rawqueries';

function updateCategory(name, id) {
  console.log(name, id);

  return sequelize.query(`${QUERIES.updateCategory}`, {
    replacements: {
      name,
      id,
    },
  });
}


const categoryModel = {
  updateCategory,
};
export default categoryModel;
