var User = require("./UserModel");
function getOneUser(response,userName,passWord){
  var query = { 'email':userName, 'password':passWord}
  User.find(query,function(err, User) {
    var result = null;
    if (err) return console.error(err);
    console.dir(User);
    if(JSON.stringify(User)==="[]"){
      console.log("no");
      result = '{"isOK":"no"}'
    }else{
      result = '{"isOK":"ok"}'
    }
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(result);
    response.end();
  });
}

exports.getOneUser = getOneUser;
