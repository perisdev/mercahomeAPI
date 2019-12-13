const express = require('express');
const router = express.Router();

// middlewares
import productsFilterMiddleware from '../middlewares/productsFilterMiddleware';

// controllers
import {
  allController,
  promoController,
  addController,
  updateController
} from '../controllers/productsController';

// routes
router.get('/', productsFilterMiddleware, allController);
router.get('/promo', productsFilterMiddleware, promoController);
router.post('/add', addController);
router.patch('/update', updateController);

// 404 default
router.use((req, res) => res.status(404).json({ message: 'The resource you requested could not be found' }))

module.exports = router;
