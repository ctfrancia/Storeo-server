import express from 'express';
import { getProductsById } from '../Controllers/User Controllers/getProductsById';

const router = express.Router();



//================================
//         USER ROUTES
//================================

//PRODUCTS
//get /products

//SPECIFIC PRODUCT
//get /products/:productId

router.get('/products', getProductsById);

//CATEGORIES
//get /category 

//PRODUCTS BY CATEGORY
//get /products/:categoryId

//ORDERS
//post /orders

//SIGNUP
//post /signup

//LOGIN
//post /login

//SEARCH
//post /search 

//PREVIOUS ORDERS ???
//get /orders