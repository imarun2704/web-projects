const express = require('express');
const empController = require('./empController')

const router = express.Router();

router.post('/signup', empController.signup);


module.exports = router;
