import categoryModel from '../../Models/AdminModels/categoryModel';

const updateCategory = async (req, res) => {
  const id = req.params.categoryId;
  const { name } = req.body;
  console.log(id);
  console.log(req.body, name);

  try {
    await categoryModel.updateCategory(name, id);
    res
      .status(202)
      .end('Update successfull');
  } catch (e) {
    /* eslint-disable-next-line */
    console.log('Error updating in controller ==>', e);
    res
      .status(500)
      .end('Error updating, please try again');
  }
};

export default updateCategory;
