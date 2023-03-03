const express = require('express');

const isLogged = require('../middlewares/isLogged');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/', isLogged(), userController.get);
userRouter.patch('/', isLogged(), userController.path);
userRouter.delete('/', isLogged(), userController.delete);

module.exports = userRouter;
