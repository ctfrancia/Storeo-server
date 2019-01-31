import express from 'express';
import getAllCategories from '../Controllers/AdminControllers/admin.controllers';

const router = express.Router();

router.get('/getAllCategories', getAllCategories);


module.exports = router;

//= ===============================
//         ADMIN ROUTES
//= ===============================

// PRODUCTS

// get /admin/products  - Get All Products
// get /admin/products/cat/:categoryId  - Get All Products from the Category

// SPECIFIC PRODUCT
// post /admin/products/ - Create new Product
// get /admin/products/:productId
// put /admin/products/:productId
// delete /admin/products/:productId

// ORDERS
// get /admin/orders  Get All Orders

// CATEGORIES
// get /admin/categories

// SPECIFIC CATEGORY
// post /admin/categories/:categoryId
// put /admin/categories/:categoryId
// delete /admin/categories/:categoryId

// LOGIN
// post /admin/login

// SIGNUP
// post /admin/signup
