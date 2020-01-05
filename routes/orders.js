const express = require('express');
const router = express.Router();

// middlewares
import validationTokenMiddleware from '../middlewares/validationTokenMiddleware';

// controllers
import { addController, allByUserController } from '../controllers/ordersController';

// routes
router.use(validationTokenMiddleware);

router.post('/', allByUserController);
router.post('/add', addController);

// 404 default
router.use((req, res) => res.status(404).json({ message: 'The resource you requested could not be found' }));

module.exports = router;
