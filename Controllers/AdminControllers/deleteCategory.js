import sequelize from '../../db';

const deleteCategory = async (req, res, next) => {
  const id = req.params.categoryId;
  try {
    await sequelize.query(
      `DELETE FROM categories WHERE id = ${id}`,
    );
    res
      .status(200)
      .end('Delete successful');
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in deleteCategory Controller =>', err);
    err.errorMessage = 'Impossible to delete category.';
    next(err);
  }
};

export default deleteCategory;
