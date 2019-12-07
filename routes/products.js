const express = require('express');
const router = express.Router();

// middlewares
import productsFilterMiddleware from '../middlewares/productsFilterMiddleware';

// controllers
import productsController from '../controllers/productsController';
import promoController from '../controllers/promoController';

// routes
router.use(productsFilterMiddleware);

router.get('/', productsController);
router.get('/promo', promoController);


// 404 default
router.use((req, res) => res.status(404).json({ message: 'The resource you requested could not be found' }))

module.exports = router;
