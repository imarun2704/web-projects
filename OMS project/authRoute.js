const express = require('express');
const authController = require('./authController');

const router = express.Router();

router.post('/signup', authController.createEmployee);
router.post('/login',authController.login);

module.exports = router;
