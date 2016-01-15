var mongoose = require('mongoose'); 
var GraphicSchema = new mongoose.Schema({
      title: {type: String },
      content: {type: String },
      author: {type: String },
      url: {type: String },
      imgPath: {type: String }
});
var GraphicModel = mongoose.model('Graphic', GraphicSchema);
module.exports = GraphicModel;