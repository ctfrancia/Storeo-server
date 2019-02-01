import Sequelize from 'sequelize';
import sequelize from '../../db';
import { db } from '../../Models';

const { Product } = db;

const getProductsByCategoryId = async (req, res) => {
  try {
    const id = req.params.categoryId;
    const products = await sequelize.query(
      `SELECT * FROM products WHERE category_id = ${id}`,
      {
        model: Product,
        type: Sequelize.QueryTypes.SELECT,
      },
    );
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
