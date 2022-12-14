const User = require('../models/user');


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

profileController.editProfile = function(req,res,next){

    User.findByIdAndUpdate(req.userId, req.body, (err, editedUser)=>{
        if (err){
            console.log('Error saving new data');
            next(err);
        } else {
            res.json(editedUser);
        }
    } )
}

profileController.addFavoriteToList = function(req,res,next){
    
    User.findOneAndUpdate(
       { _id: req.userId }, 
       { $push: { favoriteList: req.body.user  } },
      function (error, success) {
            if (error) {
                console.log(error);
            } else {
                res.json(success);
            }
        });
}

profileController.removeFavoriteToList = function(req,res,next){

    User.findOneAndUpdate(
        { _id: req.userId }, 
        { favoriteList: req.body.real }, 
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 res.json(success);
             }
         });
}


module.exports = profileController;
