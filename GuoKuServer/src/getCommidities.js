var Commidity = require("./Model/commiditiesModel");

function getCommiditys(response){
  Commidity.find(function(err, Commiditys) {
    if (err) return console.error(err);
    console.dir(Commiditys);
    response.writeHead(200, {"Content-Type": "text/json"});
    response.write(JSON.stringify(Commiditys));
    response.end();
  });
}

exports.getCommiditys = getCommiditys;