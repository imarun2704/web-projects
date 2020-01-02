const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const reviewController = require('./../controllers/reviewController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);


// protects all the routes after this middleWAre
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);

router.get('/me', userController.getMe, userController.getUser);

router.patch('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);

// router.patch('/updateMe', authController.protect, authController.updateMe);

router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

//Post /tour/234ad4/reviews.
//GET /tour/234ad4/reviews
//GET /tour/234ad4/reviews/86gu7y8

router
  .route('/:tourId/reviews')
  .post(
    authController.protect,
    authController.restrictTo('users'),
    reviewController.createReview
  );

module.exports = router;
