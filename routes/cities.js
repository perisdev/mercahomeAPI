const express = require('express');
const router = express.Router();

// controllers
import citiesController from '../controllers/citiesController';

// routes
router.get('/', citiesController);

// 404 default
router.use((req, res) => res.status(404).json({ message: 'The resource you requested could not be found' }))

module.exports = router;
