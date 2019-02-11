import express from 'express';
import user from './userImports';
import authMiddleware from '../Middlewares/authorization';
import gateMiddleware from '../Middlewares/gate';

const router = express.Router();

// Signup
router.post('/signup', user.signup);

// Login
router.get('/login', user.login);

//  Products
router.get('/products', user.getAllProducts);
router.get('/products/:productId', user.getProductById);
router.get('/products/cat/:categoryId', user.getProductsByCategoryId);

// Categories
router.get('/categories', user.getAllCategories);
router.get('/categories/:categoryId', user.getCategoryById);

// Orders
router.post('/orders', authMiddleware, gateMiddleware, user.postNewOrder);

// Add Address
router.post('/address', authMiddleware, gateMiddleware, user.updateAddress);

//  Previous Orders
router.get('/orders', authMiddleware, gateMiddleware, user.getOrdersFromUser);

// Search
router.get('/search', user.getSearchProducts);

// Stripe charge
router.post('/charge', authMiddleware, gateMiddleware, user.stripeCharge);

module.exports = router;
