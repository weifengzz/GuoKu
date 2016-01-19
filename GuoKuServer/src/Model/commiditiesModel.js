var mongoose = require('mongoose'); 
var CommiditySchema = new mongoose.Schema({
	  title: {type: String },
	  content: {type: String },
	  price: {type: String },
	  date: {type: String },
	  comment: {type: [String]},
	  commentAuthor: {type: [String]},
    imgPath1: {type: String },
  	imgPath2: {type: String },
  	imgPath3: {type: String },
  	love: {type: Number}
});
var CommidityModel = mongoose.model('commidities', CommiditySchema);
module.exports = CommidityModel;
