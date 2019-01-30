import express from 'express';
import getAllProducts from '../Controllers/UserControllers/getAllProducts';
import getProductsById from '../Controllers/UserControllers/getProductsById';
import getAllCategories from '../Controllers/UserControllers/getAllCategories';
import postNewOrder from '../Controllers/UserControllers/postNewOrder';
import getProductsByCategoryId from '../Controllers/UserControllers/getProductByCategoryId';

const router = express.Router();

//  Products
router.get('/products', getAllProducts);
router.get('/products/:productId', getProductsById);
router.get('/products/cat/:categoryId', getProductsByCategoryId);

// Categories
router.get('/categories', getAllCategories);

// Orders
// post /orders
router.post('/orders', postNewOrder);

// SIGNUP
// post /signup

// LOGIN
// post /login

// SEARCH
// post /search

// PREVIOUS ORDERS ???
// get /orders
module.exports = router;
