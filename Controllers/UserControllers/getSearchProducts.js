import retrieveProductsBySearchQuery from '../../Model - Queries/retrieveProductsBySearchQuery';

const getSearchProducts = async (req, res) => {
  const { q, category } = req.query;
  if (q === undefined) {
    res
      .status(401)
      .send({ error: 'Search query is undefined.' });
  } else {
    try {
      const products = await retrieveProductsBySearchQuery(q, category);
      res
        .status(200)
        .send(products);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Error in getSearchProducts Controller', err);
      res
        .status(401)
        .send({ error: 'Search request error.' });
    }
  }
};

export default getSearchProducts;
