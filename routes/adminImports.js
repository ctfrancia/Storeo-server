import postNewCategory from '../Controllers/AdminControllers/postNewCategory';
import getAllCategories from '../Controllers/SharedControllers/getAllCategories';
import deleteCategory from '../Controllers/AdminControllers/deleteCategory';
import getAllProducts from '../Controllers/SharedControllers/getAllProducts';
import getProductById from '../Controllers/SharedControllers/getProductById';
import deleteProductById from '../Controllers/AdminControllers/deleteProductById';
import getProductsByCategoryId from '../Controllers/SharedControllers/getProductByCategoryId';
import updateCategory from '../Controllers/AdminControllers/updateCategory';
import postNewProduct from '../Controllers/AdminControllers/postNewProduct';
import updateProduct from '../Controllers/AdminControllers/updateProduct';
import getAllOrders from '../Controllers/AdminControllers/getAllOrders';
import login from '../Controllers/SharedControllers/login';
import signup from '../Controllers/SharedControllers/signup';

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
  login,
  signup,
};
