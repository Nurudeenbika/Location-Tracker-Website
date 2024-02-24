const mongoose = require('mongoose');


const connectDb = async (req, res) => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/locationApp')

        console.log('connected to database');
    } catch (error) {

        return res.status(500).json({message: error.message});
    }
}

module.exports = connectDb