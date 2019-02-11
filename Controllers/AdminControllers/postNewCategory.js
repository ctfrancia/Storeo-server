import insertNewCategory from '../../Models/AdminModels/insertNewCategory';

const postNewCategory = async (req, res, next) => {
  try {
    const answer = await insertNewCategory(req.body);
    if (answer === true) {
      res
        .status(409)
        .end('Category already exists');
    } else {
      res
        .status(200)
        .send('Success.');
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error in postNewCategory controller =>', err);
    err.errorMessage = 'Impossible to create new category.';
    next(err);
  }
};

export default postNewCategory;
