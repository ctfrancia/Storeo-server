import Sequelize from 'sequelize';
import Product from '../../Schemas/ProductModel';
import sequelize from '../../db';

const deleteProductById = async (req, res) => {
  const { productId } = req.params;

  try {
    await sequelize.query(
      'DELETE FROM products WHERE id = :productId',
      {
        model: Product,
        replacements: { productId },
        type: Sequelize.QueryTypes.DELETE,
      },
    );
    res
      .status(204)
      .end();
  } catch (error) {
    // eslint-disable-next-line
    console.error('Error in the deleteProducById controller.');
    res
      .status(500)
      .send('Unable to delete the product.');
  }
};

module.exports = deleteProductById;
