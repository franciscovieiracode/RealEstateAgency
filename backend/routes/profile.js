var express = require('express');
const authController = require('../controllers/authController');
var router = express.Router();
var profileController = require('../controllers/profileController')

router.get('/showprofile/:id', authController.verifyToken, profileController.showProfile);
router.delete('/deleteprofile/:id', authController.verifyToken, profileController.deleteProfile)
router.put('/editprofile/:id', authController.verifyToken, profileController.editProfile)
router.put('/addfavorite/:id', authController.verifyToken, profileController.addFavoriteToList)
router.put('/removefavorite/:id', authController.verifyToken, profileController.removeFavoriteToList)


module.exports = router;