var express = require('express');
var router = express.Router();

import {registerController, loginController, logoutController} from '../controllers/usersControllers';
import hashPassMiddleware from '../middlewares/hashPassMiddleware';
import createTokenMiddleware from '../middlewares/createTokenMiddleware';
import comparePassMiddleware from '../middlewares/comparePassMiddleware'
import validationTokenMiddleware from '../middlewares/validationTokenMiddleware';

/* POST users listing. */
router.post('/register', hashPassMiddleware, createTokenMiddleware, registerController);
router.post('/login', comparePassMiddleware, createTokenMiddleware, loginController);
router.patch('/logout', validationTokenMiddleware, logoutController);

module.exports = router;
