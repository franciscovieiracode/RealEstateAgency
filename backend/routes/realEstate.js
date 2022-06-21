var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController')
var realEstateController = require('../controllers/realEstateController')

router.post('/addrealestate', authController.verifyTokenAgent, realEstateController.addRealEstate);
router.get('/getrealestate', realEstateController.getRealEstate);
router.put('/editrealestate/:id', authController.verifyTokenAgent, realEstateController.editRealEstate)
router.get('/getrealestatebyid/:id', authController.verifyToken, realEstateController.getRealEstateByID)


module.exports = router;