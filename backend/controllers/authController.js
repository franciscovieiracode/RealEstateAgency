const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../jwt_secret/config');

var authController = {};

authController.login = function(req, res){
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send({"auth": false ,"message": "Wrong email"});
        
        // check if the password is valid
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        
        if (!passwordIsValid) return res.status(401).send({ "auth": false, "token": null, "message":'Wrong password' });

        // if user is found and password is valid
        // create a token
        var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
        });

        // return the information including token as JSON
        res.status(200).send({ "auth": true, "token": token, "message":"Login successful" });
  });
}

authController.register = function(req, res){
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  User.create({
      name : req.body.name,
      email : req.body.email,
      password : hashedPassword,
      cellphone: req.body.cellphone,
      role: req.body.role,
      createdAt: Date.now()
  }, 
  function (err, user) {

      if (err) return res.status(500).json(err);

      // if user is registered without errors
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
      });

      res.status(200).send({ 'auth': true, 'token': token });
  });
}



module.exports = authController;