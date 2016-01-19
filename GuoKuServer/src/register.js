var Register = require("./UserModel");
const SUCCESS = '{"isOK":"ok"}';
const DEFAULT = '{"isOK":"no"}';
function register(response,userName,passWord,nm){
  var RegisterEntity = new Register({email:userName,password:passWord,name:nm});
  console.log("entity--------"+RegisterEntity.email+"-----"+RegisterEntity.password+"------------"+RegisterEntity.name);
  RegisterEntity.save(function(err) {
    if (err) {
      handleError(err);
      response.write(DEFAULT);
    }
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(SUCCESS);
    response.end();
  });
}

exports.register = register;