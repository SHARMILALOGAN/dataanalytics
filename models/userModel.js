
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    d_vehicleid: String,
    d_vehicletype: String,
    d_source: String,
    d_destination: String,
    d_year: String,
    d_time: String,
    d_tollid1: String,
    d_tollid2:String,
    d_tollid3: String,
    d_amtoll1:String,
    d_amtoll2:String,
    d_amtoll3: String,
    d_total: String,
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;

