import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import sequelize from '../db';
import { db } from '../Schemas';

const { User } = db;

dotenv.config();

const authMiddleware = async (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (authHeaders) {
    const [authType, token] = authHeaders.split(' ');
    if (authType === 'Bearer') {
      const jwtSecret = process.env.JWT_SECRET;
      try {
        const { email } = await jwt.verify(token, jwtSecret);
        const [user] = await sequelize.query('SELECT * FROM users WHERE email = :email',
          {
            model: User,
            replacements: {
              email,
            },
            type: sequelize.QueryTypes.SELECT,
          });

        req.body.user = user;
        next();
      } catch (err) {
        //  eslint-disable-next-line
        console.log('Error with jwt ', err);
        err.statusCode = 401;
        err.errorMessage = 'Invalid token.';
        next(err);
      }
    }
  }
};

export default authMiddleware;
