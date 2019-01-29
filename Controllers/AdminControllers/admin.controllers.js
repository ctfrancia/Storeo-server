/* eslint-disable */
// FIXME: if commented out cannot connect to db
import User from '../../Models/UserModel';
/* eslint-enable */

const getAllCategories = async (req, res) => {
  //  const paylod = await function that fetches data
  res
    .status(200)
    .send('hello')
    .end();
};

export default getAllCategories;
