import express from 'express';
import getAllProducts from '../Controllers/UserControllers/getAllProducts';
import getProductById from '../Controllers/UserControllers/getProductById';
import getAllCategories from '../Controllers/UserControllers/getAllCategories';
import postNewOrder from '../Controllers/UserControllers/postNewOrder';
import getProductsByCategoryId from '../Controllers/UserControllers/getProductByCategoryId';
import userSignup from '../Controllers/UserControllers/userSignup';
import userLogin from '../Controllers/UserControllers/userLogin';

const router = express.Router();

//  Products
router.get('/products', getAllProducts);
router.get('/products/:productId', getProductById);
router.get('/products/cat/:categoryId', getProductsByCategoryId);

// Categories
router.get('/categories', getAllCategories);

// Orders
router.post('/orders', postNewOrder);

// SIGNUP
router.post('/signup', userSignup);

// LOGIN
router.get('/login', userLogin);

// ADD ADDRESS


// SEARCH
// post /search

// PREVIOUS ORDERS ???
// get /orders
module.exports = router;
