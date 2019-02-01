import bcrypt from 'bcrypt';
import sequelize from '../../db';
import User from '../../Models/UserModel';
import log from '../../Helpers/log';

const userSignup = async (req, res, next) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
    } = req.body;

    if (!email || !password) {
      res
        .status(400)
        .send('Please provide valid email and password.');
      next();
    } else if (password.length < 8) {
      res
        .status(400)
        .send('Password must be 8 characters or longer.');
      next();
    } else {
      const user = await sequelize.query('SELECT * FROM users WHERE email = :email',
        { replacements: { email }, type: sequelize.QueryTypes.SELECT });

      log('Retrieved user', user);

      //  sequelize returns an empty array ([]) if user does not exists
      if (user && user.length !== 0) {
        res
          .status(400)
          .send(`The email ${email} has already been used.`);
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await sequelize.query(
          `INSERT INTO users (first_name, last_name, email, password)
           VALUES (:firstname, :lastname, :email, :password)`,
          {
            model: User,
            replacements: {
              firstname,
              lastname,
              email,
              password: hashedPassword,
            },
            type: sequelize.QueryTypes.INSERT,
          },
        );

        log('New User', newUser);
        res
          .status(201)
          .send(newUser);
      }
    }
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in userSignup controller =>', err);
    res
      .status(400)
      .send('Unable to create user.');
  }
};

export default userSignup;
