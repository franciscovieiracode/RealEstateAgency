var mongoose = require('mongoose')

const descriptionSchema = new mongoose.Schema({
    typology: {
        type: String,
        required: true
    },
    sqFeet:{
        type: Number,
        required: true,
    },
    condition:{
        type: String,
        enum: ['construction', 'done'],
        required: true
    }
});


const addressSchema = new mongoose.Schema({
    district:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    street:{
        type: String,
        required: true,
    },
    cp:{
        type: String,
        required: true
    }
});


const realEstateSchema = new mongoose.Schema({
    description: descriptionSchema,
    location: addressSchema,
    neighborhoodDescription:{
        type: String,
        maxlength: 50
    },
    price:Number,
    agentCellphone: {
        type: String,
        minlength: 9,
        maxlength: 14,
        required: true
    },
    publishState:{
        type: String,
        enum: ['published', 'notPublished'],
        default: 'notPublished'
    }
});

module.exports = mongoose.model('RealEstate', realEstateSchema);
