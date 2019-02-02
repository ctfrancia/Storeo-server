import retrieveCategoryById from '../../Model - Queries/retrieveCategoryById';

const getCategoryById = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await retrieveCategoryById(categoryId);
    res
      .status(200)
      .send(category);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getCategoryById Controller =>', err);
    res
      .status(401)
      .send('Impossible to retrieve category.');
  }
};

export default getCategoryById;
