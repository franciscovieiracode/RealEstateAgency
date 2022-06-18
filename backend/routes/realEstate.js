var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController')
var realEstateController = require('../controllers/realEstateController')

router.post('/addrealestate', authController.verifyTokenAgent, realEstateController.addRealEstate);


module.exports = router;