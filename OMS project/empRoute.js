const express = require('express');
const empController = require('./empController');
const authController = require('./authController');

const router = express.Router();


router
.route('/')
.get(authController.protect, empController.getAllEmployees);
router
  .route('/:id')
  .get(authController.protect, authController.restrictTo('admin'),empController.getEmployee)
  .patch(authController.protect, authController.restrictTo('admin'),empController.updateEmployee)
  .delete(authController.protect, authController.restrictTo('admin'), empController.deleteEmployee);



module.exports = router;
