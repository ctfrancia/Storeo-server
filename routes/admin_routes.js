import express from 'express';
import postNewCategory from '../Controllers/AdminControllers/postNewCategory';
import getAllCategories from '../Controllers/UserControllers/getAllCategories';
import deleteCategory from '../Controllers/AdminControllers/deleteCategory';
import getAllProducts from '../Controllers/UserControllers/getAllProducts';
import getProductById from '../Controllers/UserControllers/getProductById';
import deleteProductById from '../Controllers/AdminControllers/deleteProductById';
import getProductsByCategoryId from '../Controllers/UserControllers/getProductByCategoryId';
import updateCategory from '../Controllers/AdminControllers/updateCategory';
import postNewProduct from '../Controllers/AdminControllers/admin.postNewProduct';
import updateProduct from '../Controllers/AdminControllers/admin.updateProduct';

const router = express.Router();
//= ===============================
//         ADMIN ROUTES
//= ===============================

// PRODUCTS
router.post('/products', postNewProduct);
router.get('/products', getAllProducts);
router.get('/products/:productId', getProductById);
router.get('/products/cat/:categoryId', getProductsByCategoryId);
router.delete('/products/:productId', deleteProductById);
router.put('/products/:productId', updateProduct);

// Orders
// get /admin/orders  Get All Orders
// updateCategory
// Categories
router.get('/categories', getAllCategories);
router.post('/categories', postNewCategory);
router.put('/categories/:categoryId', updateCategory);
router.delete('/categories/:categoryId', deleteCategory);

// SPECIFIC CATEGORY
// post /admin/categories/:categoryId

// Login
// post /admin/login

// Signup
// post /admin/signup

module.exports = router;
