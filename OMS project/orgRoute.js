const express = require('express');
const orgController = require('./orgController')
const authController = require('./authController');

const router = express.Router();

router
.route('/')
.get(authController.protect, authController.restrictTo('admin'),orgController.getAllOrganisations)
.post(authController.protect, authController.restrictTo('admin'),orgController.createOrganisation);

router
  .route('/:id')
  .get(authController.protect, authController.restrictTo('admin'),orgController.getOrganisation)
  .patch(authController.protect, authController.restrictTo('admin'),orgController.updateOrganisation)
  .delete(authController.protect, authController.restrictTo('admin'),orgController.deleteOrganisation);


module.exports = router;








