import express from 'express';
import { getAllProducts } from '../Controllers/User Controllers/getAllProducts';
import { getProductsById } from '../Controllers/User Controllers/getProductsById';
import { getCategories } from '../Controllers/User Controllers/getCategories';
import { getProductsByCategory } from '../Controllers/User Controllers/getProductsByCategory';
import { postNewOrder } from '../Controllers/User Controllers/postNewOrder';

const router = express.Router();

//= ===============================
//         USER ROUTES
//= ===============================

// PRODUCTS
// get /products

router.get('/products', getAllProducts);

// SPECIFIC PRODUCT
// get /products/:productId

router.get('/products/:productId', getProductsById);

//CATEGORIES
//get /categories 

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
