import sequelize from '../../db';

const deleteCategory = async (req, res) => {
  const id = req.params.categoryId;
  try {
    await sequelize.query(
      `DELETE FROM categories WHERE id = ${id}`,
    );
    res
      .status(200)
      .end();
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in deleteCategory Controller =>', err);
    res
      .status(401)
      .send('Impossible to delete category.');
  }
};

export default deleteCategory;
