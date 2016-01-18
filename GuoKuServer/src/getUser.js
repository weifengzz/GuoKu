var mongoose = require('mongoose'); 
mongoose.connect('mongodb://192.168.6.5:27017/GuoKuDB');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
  console.log('opened db');
});

var Graphic = require("./GraphicModel");

function getUser(response){

  Graphic.find(function(err, User) {
    console.log("in callback")
    if (err) return console.error(err);
    console.dir(User);
    response.writeHead(200, {"Content-Type": "text/json"});
    response.write(JSON.stringify(User));
    response.end();
  });
}

exports.getUser = getUser;