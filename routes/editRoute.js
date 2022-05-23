const express = require('express');
const router = express.Router();
const { edit } = require('../controllers/editController')

router.get('/:id', edit);

module.exports = router;
