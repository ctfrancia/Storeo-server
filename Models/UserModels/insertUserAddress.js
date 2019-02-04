import Sequelize from 'sequelize';
import sequelize from '../../db';

const insertUserAddress = async (body) => {
  const { id: userId } = body.user;
  const {
    country,
    address,
    zip,
    phone,
  } = body;
  // First query to update user record
  await sequelize.query(
    `UPDATE users SET
    country = :country,
    address = :address,
    zip = :zip,
    phone = :phone
    WHERE id = :userId;`,
    {
      replacements: {
        country,
        address,
        zip,
        phone,
        userId,
      },
      type: Sequelize.QueryTypes.UPDATE,
    },
  );

  //  Second query to retrieve the updated user
  const updatedUser = await sequelize.query('SELECT * FROM users WHERE id = :userId',
    {
      replacements: {
        userId,
      },
      type: Sequelize.QueryTypes.SELECT,
    });
  return updatedUser;
};

export default insertUserAddress;
