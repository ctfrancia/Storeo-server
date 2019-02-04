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
import authMiddleware from '../Middlewares/authorization';
import gateMiddleware from '../Middlewares/gate';

const router = express.Router();

// Products
router.post('/products', authMiddleware, gateMiddleware, postNewProduct);
router.get('/products', authMiddleware, gateMiddleware, getAllProducts);
router.get('/products/:productId', authMiddleware, gateMiddleware, getProductById);
router.get('/products/cat/:categoryId', authMiddleware, gateMiddleware, getProductsByCategoryId);
router.delete('/products/:productId', authMiddleware, gateMiddleware, deleteProductById);
router.put('/products/:productId', authMiddleware, gateMiddleware, updateProduct);

// Orders
// router.get('/orders', )

// Categories
router.get('/categories', getAllCategories);
router.post('/categories', postNewCategory);
router.put('/categories/:categoryId', updateCategory);
router.delete('/categories/:categoryId', deleteCategory);

// Login
// post /admin/login

// Signup
// post /admin/signup

module.exports = router;
