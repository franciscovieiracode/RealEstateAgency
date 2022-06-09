var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController')

router.get('/api/v1/user/regist', authController.login);

module.exports = router;
