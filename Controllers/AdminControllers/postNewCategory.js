import insertNewCategory from '../../Models/AdminModels/insertNewCategory';


const postNewCategory = async (req, res) => {
  try {
    const { category_properties: categoryProperties, name } = req.body;

    await insertNewCategory(categoryProperties, name);
    res
      .status(200)
      .send('Success.');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error in postNewCategory controller', err);
    res
      .status(400)
      .send('Impossible to create new category.');
  }
};

export default postNewCategory;
