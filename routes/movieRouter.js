const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');

router.get("/:id", movieController.getMovieById);

router.get("/delete/:id", movieController.delete);

module.exports = router;