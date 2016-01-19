var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");
var url = require("url");
var getGraphics = require("./getGraphic");
var getAUser = require("./getUser");

//这里是获取图片的方法
var filePath = "/Users/songximing/Desktop/GuoKu/GuoKuServer/";
function getImage(response,request,pathName){
  var query = url.parse(request.url).query;
  var imgName = querystring.parse(query)["imgName"];
  fs.readFile(filePath+"/files/images/"+imgName, function(error,file){
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

//的到图文
function getGraphic(response){
  getGraphics.getGraphics(response);
}
//登录功能验证
function getUser(response,request){
  var info ="";
  if(request.method != 'POST'){
    var query = url.parse(request.url).query;
    var userName = querystring.parse(query)["email"];
    var passWord = querystring.parse(query)["password"];
    getAUser.getOneUser(response,userName,passWord);
  }else{
    request.addListener('data', function(chunk){  
        info += chunk;
    })  
    .addListener('end', function(){
        var result = JSON.parse(info);
        var userName = result['email'];
        var passWord = result['password'];
        console.log(userName+"-------------"+passWord);
        getAUser.getOneUser(response,userName,passWord);
    })
  }
}

exports.getImage = getImage;
exports.getGraphic = getGraphic;
exports.getUser = getUser;
// exports.start = start;
// exports.upload = upload;
// exports.show = show;



//function start(response) {
//   console.log("Request handler 'start' was called.");
//   var body = '<html>'+
//     '<head>'+
//     '<meta http-equiv="Content-Type" content="text/html; '+
//     'charset=UTF-8" />'+
//     '</head>'+
//     '<body>'+
//     '<form action="/upload" enctype="multipart/form-data" '+
//     'method="post">'+
//     '<input type="file" name="upload" multiple="multiple">'+
//     '<input type="submit" value="Upload file" />'+
//     '</form>'+
//     '</body>'+
//     '</html>';
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write(body);
//     response.end();
// }
// function upload(response, request) {
//   console.log("Request handler 'upload' was called.");
//   var form = new formidable.IncomingForm();
//   console.log("about to parse");
//   form.parse(request, function(error, fields, files) {
//     console.log("parsing done");
//     fs.renameSync(files.upload.path, "/tmp/test.png");
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write("received image:<br/>");
//     response.write("<img src='/show' />");
//     response.end();
//   });
// }
// function show(response) {
//   console.log("Request handler 'show' was called.");
//   fs.readFile("/tmp/test.png", "binary", function(error, file) {
//     if(error) {
//       response.writeHead(500, {"Content-Type": "text/plain"});
//       response.write(error + "\n");
//       response.end();
//     } else {
//       response.writeHead(200, {"Content-Type": "image/png"});
//       response.write(file, "binary");
//       response.end();
//     }
//   });
// }