var Commidity = require("./articleModel");
function search(response,key){
  var query = {'title':'/'+key+''}
  Commidity.find(query,function(err, articles) {
    if (err) return console.error(err);
    console.dir(articles);
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(articles));
    response.end();
  });
}

exports.search = search;