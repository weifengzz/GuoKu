var Commidity = require("./Model/commiditiesModel");
function search(response,request,key){
	var search = new RegExp(key);
  var query = [{ "title": search},{'comment':search},{'category':search}]
  console.log(query);
  Commidity.find({"$or":query},function(err, articles) {
    if (err) return console.error(err);
    console.log("search");
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(articles));
    response.end();
  });
}

function searchByCategory(response,request,category){
  var query = {'category': category}
  Commidity.find(query,function(err, articles) {
    if (err) return console.error(err);
    console.log(category);
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(articles));
    response.end();
  });
}

exports.search = search;
exports.searchByCategory = searchByCategory;
