const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const moviesController = require('../controllers/moviesController');

router.get("/", mainController.main);

module.exports = router;