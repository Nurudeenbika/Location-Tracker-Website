const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    email: {
        type: String, 
        unique: true, required: true},
    password: {type: String, required: true},
    confirmPassword: {type: String, required: true}
},
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('User', UserSchema);