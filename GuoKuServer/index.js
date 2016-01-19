var server = require("./src/server");
var router = require("./src/route");
var requestHandlers = require("./src/requestHandlers");
var DBConfig = require("./src/DBConfig");
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
handle["/getImage"] = requestHandlers.getImage;
handle["/getGraphic"] = requestHandlers.getGraphic;
handle["/getUser"] = requestHandlers.getUser;
handle["/register"] = requestHandlers.register;
server.start(router.route, handle);