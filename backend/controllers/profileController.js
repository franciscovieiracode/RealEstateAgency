const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../jwt_secret/config');
const authController = require('./authController');

var profileController = {};

profileController.showProfile = function(req, res,next) {

      User.findById({ _id: req.userId}, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send({"auth": false ,"message": "User not found"});
        // return the information including token as JSON
        res.status(200).json(user);
  });
    
}

profileController.deleteProfile = function(req,res,next){

  User.deleteOne({_id: req.userId}).exec((err,deletedUser)=>{
    if (err){
        next(err);
    } else {
        res.json(deletedUser);
    }
})

}



module.exports = profileController;
