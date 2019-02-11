import retrieveCategoryById from '../../Models/UserModels/retrieveCategoryById';

const getCategoryById = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const category = await retrieveCategoryById(categoryId);
    res
      .status(200)
      .send(category);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getCategoryById Controller =>', err);
    err.errorMessage = 'Impossible to retrieve category.';
    next(err);
  }
};

export default getCategoryById;
