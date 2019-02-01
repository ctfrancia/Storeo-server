import express from 'express';
import createNewCategory from '../Controllers/AdminControllers/createNewCategory';
import getAllCategories from '../Controllers/UserControllers/getAllCategories';
import deleteCategory from '../Controllers/AdminControllers/deleteCategory';
import getAllProducts from '../Controllers/UserControllers/getAllProducts';
import getProductById from '../Controllers/UserControllers/getProductById';
import deleteProductById from '../Controllers/AdminControllers/deleteProductById';
import getProductsByCategoryId from '../Controllers/UserControllers/getProductByCategoryId';
import updateCategory from '../Controllers/AdminControllers/updateCategory';

const router = express.Router();
//= ===============================
//         ADMIN ROUTES
//= ===============================

// PRODUCTS
router.get('/products', getAllProducts);
router.get('/products/:productId', getProductById);
router.get('/products/cat/:categoryId', getProductsByCategoryId);
// post /admin/products/ - Create new Product
// put /admin/products/:productId

router.delete('/products/:productId', deleteProductById);


// Orders
// get /admin/orders  Get All Orders

// CATEGORIES
router.post('/categories', createNewCategory);
router.get('/categories', getAllCategories);
router.delete('/categories/:categoryId', deleteCategory);
router.put('/categories/:categoryId', updateCategory);

// SPECIFIC CATEGORY
// post /admin/categories/:categoryId

// Login
// post /admin/login

// Signup
// post /admin/signup

module.exports = router;
