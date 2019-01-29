import express from 'express';
import getAllProducts from '../Controllers/UserControllers/getAllProducts';
import getProductsById from '../Controllers/UserControllers/getProductsById';
import getCategories from '../Controllers/UserControllers/getCategories';
import getProductsByCategory from '../Controllers/UserControllers/getProductsByCategory';
import postNewOrder from '../Controllers/UserControllers/postNewOrder';

const router = express.Router();

//= ===============================
//         USER ROUTES
//= ===============================

//  PRODUCTS
router.get('/products', getAllProducts);

//  SPECIFIC PRODUCT
router.get('/products/:productId', getProductsById);

// CATEGORIES
// get /category


// CATEGORIES
// get /categories

router.get('/categories', getCategories);

// PRODUCTS BY CATEGORY
// get /products/:categoryId

router.get('/category/:categoryId', getProductsByCategory);

// ORDERS
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
