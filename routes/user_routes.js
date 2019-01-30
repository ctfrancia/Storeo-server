import express from 'express';
import getAllProducts from '../Controllers/UserControllers/getAllProducts';
import getProductsById from '../Controllers/UserControllers/getProductsById';
import getAllCategories from '../Controllers/UserControllers/getAllCategories';
import postNewOrder from '../Controllers/UserControllers/postNewOrder';
import getProductsByCategoryId from '../Controllers/UserControllers/getProductByCategoryId';

const router = express.Router();

//  GET ALL PRODUCTS - DONE
router.get('/products', getAllProducts);

//  GET SPECIFIC PRODUCT BY ID - DONE
router.get('/products/:productId', getProductsById);

// GET SPECIFIC PRODUCT BY CATEGORY ID - DONE
router.get('/products/cat/:categoryId', getProductsByCategoryId);

// GET ALL CATEGORIES - DONE
router.get('/categories', getAllCategories);

// ORDERS - WORK IN PROGRESS
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
