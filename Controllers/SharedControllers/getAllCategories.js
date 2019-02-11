import retrieveAllCategories from '../../Models/UserModels/retrieveAllCategories';

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await retrieveAllCategories();
    res
      .status(200)
      .send(categories);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getAllCategories Controller =>', err);
    err.errorMessage = 'Impossible to retrieve categories.';
    next(err);
  }
};

export default getAllCategories;
