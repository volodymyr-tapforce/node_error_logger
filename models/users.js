const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  anonymous_id: {type:String, required:true},
  user_id: String,
  email: String,
  created_at:{type:Date, default:new Date()},
  lastErrorTime:{type:Date, default:new Date()},
});

module.exports = mongoose.model('User', userSchema);