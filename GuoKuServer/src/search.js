var Commidity = require("./Model/commiditiesModel");
var Category = require("./Model/categoryModel")

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
// 查询某一类的商品
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

function searchTopNumber(response,request,number){
  Commidity.find(function(err, articles) {
    if (err) return console.error(err);
    console.log("search");
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(articles));
    response.end();
  }).limit(number);
}

function sortByCategory(response,request,category,sort){
  var query = {'category': category}
  Commidity.find(query,function(err, articles) {
    if (err) return console.error(err);
    console.log(category);
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(articles));
    response.end();
  }).sort({'love':sort});
}

//查询商品的类别
function getCategory(response,request){
  Category.find(function(err, articles) {
    if (err) return console.error(err);
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(articles));
    response.end();
  });
}

exports.search = search;
exports.searchByCategory = searchByCategory;
exports.searchTopNumber = searchTopNumber;
exports.sortByCategory = sortByCategory;
exports.getCategory = getCategory;

