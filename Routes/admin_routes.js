const router = require('express').Router();
const ctrls = require('../Controllers/AdminControllers/admin.controllers');

router.get('/getAllCategories', ctrls.getAllCategories);

module.exports = router;

//= ===============================
//         ADMIN ROUTES
//= ===============================

// PRODUCTS

// get /admin/products
// post /admin/products/

// SPECIFIC PRODUCT
// get /admin/products/:productId
// put /admin/products/:productId
// delete /admin/products/:productId

// ORDERS
// get /admin/orders

// CATEGORIES
// get /admin/category

// SPECIFIC CATEGORY
// post /admin/category/:categoryId
// put /admin/category/:categoryId
// delete /admin/category/:categoryId

// LOGIN
// post /admin/login

// SIGNUP
// post /admin/signup
