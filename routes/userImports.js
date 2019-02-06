import getAllProducts from '../Controllers/SharedControllers/getAllProducts';
import getProductById from '../Controllers/SharedControllers/getProductById';
import getAllCategories from '../Controllers/SharedControllers/getAllCategories';
import postNewOrder from '../Controllers/UserControllers/postNewOrder';
import getProductsByCategoryId from '../Controllers/SharedControllers/getProductByCategoryId';
import signup from '../Controllers/SharedControllers/signup';
import login from '../Controllers/SharedControllers/login';
import updateAddress from '../Controllers/UserControllers/updateAddress';
import getOrdersFromUser from '../Controllers/UserControllers/getOrdersFromUser';
import getSearchProducts from '../Controllers/UserControllers/getSearchProducts';
import getCategoryById from '../Controllers/SharedControllers/getCategoryById';
import stripeCharge from '../Controllers/UserControllers/stripeCharge';


export default {
  getAllProducts,
  getProductById,
  getAllCategories,
  postNewOrder,
  getProductsByCategoryId,
  signup,
  login,
  updateAddress,
  getOrdersFromUser,
  getSearchProducts,
  getCategoryById,
  stripeCharge,
};
