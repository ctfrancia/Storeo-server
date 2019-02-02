import express from 'express';
import getAllProducts from '../Controllers/UserControllers/getAllProducts';
import getProductById from '../Controllers/UserControllers/getProductById';
import getAllCategories from '../Controllers/UserControllers/getAllCategories';
import postNewOrder from '../Controllers/UserControllers/postNewOrder';
import getProductsByCategoryId from '../Controllers/UserControllers/getProductByCategoryId';
import userSignup from '../Controllers/UserControllers/userSignup';
import userLogin from '../Controllers/UserControllers/userLogin';
import updateAddress from '../Controllers/UserControllers/updateAddress';
import getAOrdersFromUser from '../Controllers/UserControllers/getOrdersFromUser';
import getSearchProducts from '../Controllers/UserControllers/getSearchProducts';
import getCategoryById from '../Controllers/UserControllers/getCategoryById';
import authMiddleware from '../Middlewares/authorization';
import gateMiddleware from '../Middlewares/gate';

const router = express.Router();

//  Products
router.get('/products', getAllProducts);
router.get('/products/:productId', getProductById);
router.get('/products/cat/:categoryId', getProductsByCategoryId);

// Categories
router.get('/categories', getAllCategories);
router.get('/categories/:categoryId', getCategoryById);

// Orders
router.post('/orders', authMiddleware, gateMiddleware, postNewOrder);

// Signup
router.post('/signup', userSignup);

// Login
router.get('/login', userLogin);

// Add Address
router.post('/address', authMiddleware, gateMiddleware, updateAddress);

//  Previous Orders
router.get('/orders', authMiddleware, gateMiddleware, getAOrdersFromUser);

// Search
<<<<<<< HEAD
router.get('/search', getSearchProducts);
// SEARCH
// router.post('/address', insertAddress);

=======
router.get('/search', searchProducts);
>>>>>>> ae36bbaeb023cf9138b8a1e5573fa4ee88cf4075

module.exports = router;
