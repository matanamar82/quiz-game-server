const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

//define user routes
userRouter.route('/signup').post(userController.signup);
userRouter.route('/login').post(userController.login);

module.exports = userRouter;