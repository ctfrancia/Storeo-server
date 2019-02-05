import getAllProducts from '../Controllers/UserControllers/getAllProducts';
import getProductById from '../Controllers/UserControllers/getProductById';
import getAllCategories from '../Controllers/UserControllers/getAllCategories';
import postNewOrder from '../Controllers/UserControllers/postNewOrder';
import getProductsByCategoryId from '../Controllers/UserControllers/getProductByCategoryId';
import userSignup from '../Controllers/UserControllers/userSignup';
import userLogin from '../Controllers/UserControllers/userLogin';
import updateAddress from '../Controllers/UserControllers/updateAddress';
import getOrdersFromUser from '../Controllers/UserControllers/getOrdersFromUser';
import getSearchProducts from '../Controllers/UserControllers/getSearchProducts';
import getCategoryById from '../Controllers/UserControllers/getCategoryById';
import stripeCharge from '../Controllers/UserControllers/stripeCharge';


export default {
  getAllProducts,
  getProductById,
  getAllCategories,
  postNewOrder,
  getProductsByCategoryId,
  userSignup,
  userLogin,
  updateAddress,
  getOrdersFromUser,
  getSearchProducts,
  getCategoryById,
  stripeCharge,
};
