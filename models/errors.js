var mongoose = require('mongoose');

var errorSchema = new mongoose.Schema({
  anonymous_id: {type:String, required:true},
  err_type: {type:String, required:true},
  err_message: {type:String, required:true},
});

module.exports = mongoose.model('Error', errorSchema);