var server = require("./src/server");
var router = require("./src/route");
var requestHandlers = require("./src/requestHandlers");
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
handle["/getImage"] = requestHandlers.getImage;
handle["/getGraphic"] = requestHandlers.getGraphic;
server.start(router.route, handle);