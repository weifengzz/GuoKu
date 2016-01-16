var mongoose = require('mongoose'); 
var GraphicSchema = new mongoose.Schema({
	  title: {type: String },
	  content: {type: String },
	  author: {type: String },
	  date: {type: String },
	  comment: {type: [String]},
	  commentAuthor: {type: [String]},
      imgPath: {type: String }
});
var GraphicModel = mongoose.model('graphics', GraphicSchema);
module.exports = GraphicModel;