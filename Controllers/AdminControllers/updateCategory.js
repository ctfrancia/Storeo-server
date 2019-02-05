import categoryModel from '../../Models/AdminModels/categoryModel';

const updateCategory = async (req, res) => {
  const id = req.params.categoryId;
  const toChange = req.body;
  try {
    await categoryModel.updateCategory(toChange, id);
    res
      .status(202)
      .end('Update successful');
  } catch (e) {
    /* eslint-disable-next-line */
    console.log('Error updating in controller ==>', e);
    res
      .status(500)
      .end('Error updating, please try again');
  }
};

export default updateCategory;
