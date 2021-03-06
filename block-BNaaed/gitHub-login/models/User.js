var mongoose = require('mongoose');
var Schema =  mongoose.Schema;
var user = new Schema({
    name: String,
    username:{type:String, unique:true, required:true},
    email:{type:String, unique:true, required:true},
    imageurl: String,

},{
    timestamps:true,
})

module.exports = mongoose.model('User', user);