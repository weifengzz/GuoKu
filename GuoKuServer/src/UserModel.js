var mongoose = require('mongoose'); 
var UserSchema = new mongoose.Schema({
	  email: {type: String },
	  password: {type: String },
	  name: {type: String }
});
var UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;