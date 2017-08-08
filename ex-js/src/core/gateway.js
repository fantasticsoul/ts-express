"use strict";
exports.__esModule = true;
var url_route_1 = require("../../config/url-route");
function registerRoute(app) {
    for (var url in url_route_1["default"]) {
        app.use(url, url_route_1["default"][url].router);
    }
}
exports.registerRoute = registerRoute;
