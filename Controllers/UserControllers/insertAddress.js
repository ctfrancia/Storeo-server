import sequelize from '../../db';

const insertAddress = async (req, res) => {
  try {
    //  get user id from req.body renaming it userId
    const { id: userId } = req.body.user;
    if (userId) {
      const {
        country,
        address,
        zip,
        phone,
      } = req.body;

      await sequelize.query(
        `UPDATE users SET 
      country = :country,
      address = :address,
      zip = :zip,
      phone = :phone
      WHERE id = :userId;`,
        {
          replacements: {
            userId,
            country,
            address,
            zip,
            phone,
          },
          type: sequelize.QueryTypes.UPDATE,
        },
      );

      const [updatedUser] = await sequelize.query('SELECT * FROM users WHERE id = :userId',
        {
          replacements: {
            userId,
          },
          type: sequelize.QueryTypes.SELECT,
        });

      delete updatedUser.password;

      res
        .status(200)
        .send(updatedUser);
    }
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in insertAddress controller =>', err);
    res
      .status(400)
      .send('Unable to update address.');
  }
};

export default insertAddress;
