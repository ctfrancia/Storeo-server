import retrieveProductsByCategoryId from '../../Model - Queries/retrieveProductsByCategoryId';

const getProductsByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const products = await retrieveProductsByCategoryId(categoryId);
    res
      .status(200)
      .send(products);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getProductByCategoryId Controller =>', err);
    res
      .status(401)
      .send('Impossible to retrieve products.');
  }
};

export default getProductsByCategoryId;
