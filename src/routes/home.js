const express = require('express');
const router = express.Router();
const { navigationController } = require('../controller')
router.get('/',navigationController.getHome)
router.get('/movies',navigationController.getMovies)
router.get('/movies/:id',navigationController.getOneMovie)
module.exports = router;