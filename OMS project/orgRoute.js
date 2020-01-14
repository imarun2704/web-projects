const express = require('express');
const orgController = require('./orgController')

const router = express.Router();

router.post('/signup', orgController.signup);


module.exports = router;








