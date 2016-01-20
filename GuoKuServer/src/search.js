var Commidity = require("./Model/commiditiesModel");
function search(response,request,key){
	var search = new RegExp(key);
  var query = [{ "title": search},{'content':search}]
  console.log(query);
  Commidity.find({"$or":query},function(err, articles) {
    if (err) return console.error(err);
    console.dir(articles);
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(articles));
    response.end();
  });
}

exports.search = search;
