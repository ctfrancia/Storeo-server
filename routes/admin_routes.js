import express from 'express';
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
import authMiddleware from '../Middlewares/authorization';
import gateMiddleware from '../Middlewares/gate';

const router = express.Router();

// Products
router.post('/products', postNewProduct);
router.get('/products', getAllProducts);
router.get('/products/:productId', getProductById);
router.get('/products/cat/:categoryId', getProductsByCategoryId);
router.delete('/products/:productId', deleteProductById);
router.put('/products/:productId', authMiddleware, gateMiddleware, updateProduct);

// Orders
router.get('/orders', getAllOrders);

// Categories
router.get('/categories', getAllCategories);
router.post('/categories', postNewCategory);
router.put('/categories/:categoryId', updateCategory);
router.delete('/categories/:categoryId', deleteCategory);

// Login
router.get('/login', userLogin);

// Signup
router.post('/signup', userSignup);

module.exports = router;
