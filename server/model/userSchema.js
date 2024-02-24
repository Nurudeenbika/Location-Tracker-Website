const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
    email: {
        type: String, 
        unique: true, required: true},
    phone: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: String, required: true},},
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('User', UserSchema);