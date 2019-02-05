import postNewCategory from '../Controllers/AdminControllers/postNewCategory';
import getAllCategories from '../Controllers/UserControllers/getAllCategories';
import deleteCategory from '../Controllers/AdminControllers/deleteCategory';
import getAllProducts from '../Controllers/UserControllers/getAllProducts';
import getProductById from '../Controllers/UserControllers/getProductById';
import deleteProductById from '../Controllers/AdminControllers/deleteProductById';
import getProductsByCategoryId from '../Controllers/UserControllers/getProductByCategoryId';
import updateCategory from '../Controllers/AdminControllers/updateCategory';
import postNewProduct from '../Controllers/AdminControllers/postNewProduct';
import updateProduct from '../Controllers/AdminControllers/updateProduct';
import getAllOrders from '../Controllers/AdminControllers/getAllOrders';
import userLogin from '../Controllers/UserControllers/userLogin';
import userSignup from '../Controllers/UserControllers/userSignup';

export default {
  postNewCategory,
  getAllCategories,
  deleteCategory,
  getAllProducts,
  getProductById,
  deleteProductById,
  getProductsByCategoryId,
  updateCategory,
  postNewProduct,
  updateProduct,
  getAllOrders,
  userLogin,
  userSignup,
};
