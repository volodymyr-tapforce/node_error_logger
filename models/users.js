const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  anonymous_id: {type:String, required:true},
  user_id: String,
  email: String,
});

module.exports = mongoose.model('User', userSchema);