var mongoose = require('mongoose'); 
var UserSchema = new mongoose.Schema({
	  email: {type: String },
	  password: {type: String },
	  name: {type: String },
	  headImg: {type: String },
	  attention: {type: Number },
	  fans: {type: Number},
	  love: {type: [String]}
});
var UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;