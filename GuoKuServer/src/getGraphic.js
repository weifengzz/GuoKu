var mongoose = require('mongoose'); 
var GraphicSchema = require("./GraphicModel");

function getGraphics(response){
  var db = mongoose.createConnection('192.168.6.5','GuoKuDb','27017'); 
  db.on('error',console.error.bind(console,'连接错误:'));
  db.once('open',function(){
    GraphicSchema.find(function(err, graphics) {
      if (err) return console.error(err);
      console.dir(graphics);
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("OK");
      response.end();
    });
  });
}

exports.getGraphics = getGraphics;


/**

  var db = mongoose.createConnection('192.168.6.5','GuoKuDb','27017'); 
  db.on('error',console.error.bind(console,'连接错误:'));
  db.once('open',function(){
    var UserSchema = new mongoose.Schema({
      userName:String,    
      password:String
    });
    var UserModel = db.model('Graphic',UserSchema);
    var UserEntity = new UserModel({userName:'weifengzz',password:'123456'});
    console.log("entity--------"+UserEntity.userName+"-----"+UserEntity.password);
    UserEntity.save(function(err) {
      if (err) handleError(err);
      console.log('Success');
    });  
  });
*/