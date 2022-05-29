const express = require('express');
const router = express.Router();
const { create } = require('../controllers/createController');
router.get('/', create);
module.exports = router;
