// here is the centralized file for all the routes for further routing

const express = require('express');

const router = express.Router();

const userRoutes = require('./user_routes');

const adminRoutes = require('./admin_routes');


router
  .use('/admin', adminRoutes)
  .use('/', userRoutes);

module.exports = router;
