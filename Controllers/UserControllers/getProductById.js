import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Models';

const { Product } = db;

const getProductById = async (req, res) => {
  try {
    const id = req.params.productId;
    const product = await sequelize.query(
      `SELECT DISTINCT * FROM products WHERE id = ${id}`,
      {
        model: Product,
        type: Sequelize.QueryTypes.SELECT,
      },
    );
    res
      .status(200)
      .send(product);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in getProductById Controller =>', err);
    res
      .status(401)
      .send('Impossible to retrieve product.');
  }
};

export default getProductById;
