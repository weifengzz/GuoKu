var mongoose = require('mongoose'); 
mongoose.connect('mongodb://192.168.6.5:27017/GuoKuDB');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
  console.log('opened db');
});

var Graphic = require("./GraphicModel");

function getGraphics(response){
  // var db = mongoose.createConnection('127.0.0.1','GuoKuDB','27017'); 
  // Graphic.save(function(err){
  //   if(err) handleError(err);
  //   console.log('Success');
  // });
  Graphic.find(function(err, graphics) {
    console.log("in callback")
    if (err) return console.error(err);
    console.dir(graphics);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(graphics.toString());
    response.end();
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