var mongoose = require('mongoose'); 
mongoose.connect('mongodb://192.168.6.5:27017/GuoKuDB');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
  console.log('opened db');
});