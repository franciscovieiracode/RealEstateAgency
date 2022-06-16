var mongoose = require('mongoose');
var RealEstate = require('./realEstate');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    cellphone: {
        type: String,
        minlength: 9,
        maxlength: 14,
        required: true,
        unique: true  
    },
    role: {
        type: String,
        enum: ['client', 'agent'],
        default: 'client',
    },
    budget: Number,
    locationPreference: [String],
    createdAt: {
        type: Date,
        default: () =>{Date.now()}
    },
    updatedAt: Date,
    favoriteList: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'RealEstate'  
    }]
});

module.exports = mongoose.model('User', userSchema);
