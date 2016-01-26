var mongoose = require('mongoose'); 
var CategorySchema = new mongoose.Schema ({
	category: {type: String },
	imgPath1: {type: String },
	smallCategory: {type: [String]}
})
var CategoryModel = mongoose.model('categories', CategorySchema);
module.exports = CategoryModel;
