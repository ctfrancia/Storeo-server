import bcrypt from 'bcrypt';
import sequelize from '../../db';
import User from '../../Schemas/UserModel';
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
        // Someone is trying to signup as admin
        if (req.originalUrl === '/admin/signup') {
          const adminExists = await sequelize.query('SELECT * FROM users WHERE role = 1',
            {
              type: sequelize.QueryTypes.SELECT,
            });

          if (adminExists && adminExists.length !== 0) {
            res
              .status(400)
              .send('An Admin already exists for this store.');
          } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            await sequelize.query(
              `INSERT INTO users (first_name, last_name, email, password, role)
            VALUES (:firstname, :lastname, :email, :password, :role)`,
              {
                model: User,
                replacements: {
                  firstname,
                  lastname,
                  email,
                  password: hashedPassword,
                  role: 1,
                },
                type: sequelize.QueryTypes.INSERT,
              },
            );

            res
              .status(201)
              .send('Admin created.');
          }
        }

        // Someone is trying to signup as user
        if (req.originalUrl === '/signup') {
          const hashedPassword = await bcrypt.hash(password, 10);
          await sequelize.query(
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

          res
            .status(201)
            .send('User created.');
        }
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
