const realEstate = require('../models/realEstate');


var realEstateController = {};

realEstateController.addRealEstate = function(req, res) {
    

    realEstate.create({
        description : ({typology:req.body.description.typology,sqFeet:req.body.description.sqFeet}),
        location : ({district: req.body.location.district, city :req.body.location.city, street:req.body.location.street, cp:req.body.location.cp}),
        neighborhoodDescription : req.body.neighborhoodDescription,
        price: req.body.price,
        agentCellphone: req.body.agentCellphone,
        publishState: req.body.publishState,
        image_url: "https://portoalities.com/wp-content/uploads/2018/04/torre-antas-edificios-altos-porto.jpg"
    }, 
    function (err, realEstate) {

    console.log(realEstate);
        
    if (err) return res.status(500).json(err);

  
        res.status(200).json(realEstate);
    });

}   

realEstateController.getRealEstate = function(req, res) {

    realEstate.find({ }, function (err, realEstate) {
        if (err) return res.status(500).send('Error on the server.');
        if (!realEstate) return res.status(404).send({"auth": false ,"message": "No real estate available"});

        res.status(200).json(realEstate);
  });
}

realEstateController.getRealEstateByID = function(req, res) {

    realEstate.findById(req.id, function (err, realEstate) {
        if (err) return res.status(500).send('Error on the server.');
        if (!realEstate) return res.status(404).send({"auth": false ,"message": "No real estate available"});
        console.log(realEstate);
        res.status(200).json(realEstate);
  });
}

realEstateController.editRealEstate = function(req, res) {

    realEstate.findByIdAndUpdate(req.body.id, req.body, (err, editedRealEstate)=>{
    if (err){
            console.log('Error saving new data');
            next(err);
        } else {
            res.json(editedRealEstate);
        }
    } )
}

module.exports = realEstateController;