var mongoose = require('mongoose'); 
var RegisterSchema = new mongoose.Schema({
	  email: {type: String },
	  password: {type: String },
	  name: {type: String }
});
var RegisterModel = mongoose.model('users', RegisterSchema);
module.exports = RegisterModel;