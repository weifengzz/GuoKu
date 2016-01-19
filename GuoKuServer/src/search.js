var Graphic = require("./GraphicModel");
function search(response,key){
  var query = {'title':'/'+key+''}
  Graphic.find(query,function(err, Graphic) {
    var result = null;
    if (err) return console.error(err);
    console.dir(Graphic);
    if(JSON.stringify(Graphic)==="[]"){
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

exports.search = search;