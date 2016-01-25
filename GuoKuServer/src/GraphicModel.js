var mongoose = require('mongoose'); 
var GraphicSchema = new mongoose.Schema({
	  title: {type: String },
	  describe: {type: String },
	  url: {type: String },
	  date: {type: String },
	  imgPath: {type: String},
});
var GraphicModel = mongoose.model('graphics', GraphicSchema);
module.exports = GraphicModel;