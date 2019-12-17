const express = require('express');
const router = express.Router();

// middlewares
import productsFilterMiddleware from '../middlewares/productsFilterMiddleware';

// controllers
import {
  allController,
  promoController,
  topController,
  addController,
  updateController,
  removeController
} from '../controllers/productsController';

// routes
router.get('/', productsFilterMiddleware, allController);
router.get('/promo', productsFilterMiddleware, promoController);
router.get('/top', topController);
router.post('/add', addController);
router.patch('/update', updateController);
router.delete('/remove', removeController);

// 404 default
router.use((req, res) => res.status(404).json({ message: 'The resource you requested could not be found' }))

module.exports = router;
