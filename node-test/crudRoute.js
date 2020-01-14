const express = require('express');

const crudController = require('./crudController');

const router = express.Router();


router.route('/create').post(crudController.create);




module.exports = router;
