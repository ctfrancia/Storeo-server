import express from 'express';
import getAllCategories from '../Controllers/AdminControllers/admin.controllers';
import createNewCategory from '../Controllers/AdminControllers/createNewCategory';

const router = express.Router();

router.get('/getAllCategories', getAllCategories);


module.exports = router;

//= ===============================
//         ADMIN ROUTES
//= ===============================

//  Products
// get /admin/products  - Get All Products
// get /admin/products/cat/:categoryId  - Get All Products from the Category

// Specific Products
// post /admin/products/ - Create new Product
// get /admin/products/:productId - Get Product By Id
// put /admin/products/:productId  -  Update Product Info
// delete /admin/products/:productId  - Delete a Product

// Orders
// get /admin/orders  Get All Orders

// Categories
// get /admin/categories

// Specific Category
router.post('/categories', createNewCategory); //  /admin/categories/:categoryId
// delete /admin/categories/:categoryId

// Login
// post /admin/login

// Signup
// post /admin/signup
