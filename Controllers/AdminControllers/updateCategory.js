import categoryModel from '../../Models/AdminModels/categoryModel';

const updateCategory = async (req, res, next) => {
  const id = req.params.categoryId;
  const toChange = req.body;
  try {
    await categoryModel.updateCategory(toChange, id);
    res
      .status(202)
      .end('Update successful');
  } catch (err) {
    /* eslint-disable-next-line */
    console.log('Error in updateCategory controller =>', err);
    err.errorMessage = 'Error while updating category.';
    next(err);
  }
};

export default updateCategory;
