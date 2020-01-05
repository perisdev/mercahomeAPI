const express = require('express');
const router = express.Router();

// controllers
import categoriesController from '../controllers/categoriesController';

// routes
router.get('/', categoriesController);

// 404 default
router.use((req, res) => res.status(404).json({ message: 'The resource you requested could not be found' }));

module.exports = router;
