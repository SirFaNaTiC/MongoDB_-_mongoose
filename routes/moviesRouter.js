const express = require('express');
const router = express.Router();


const moviesController = require('../controllers/moviesController');

router.get("/", moviesController.list);
router.post('/', moviesController.create)



module.exports = router;