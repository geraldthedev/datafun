var mongoose = require('mongoose');
var schema = mongoose.Schema;

var schema = new Schema({
    _userid: {type: String, required:true},
    _userNum: {type: Number, required: true},
    _userEmail:{type: String, required:true}

});

module.exports = mongoose.model('People', schema);