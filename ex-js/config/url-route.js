"use strict";
exports.__esModule = true;
var users_1 = require("../src/routes/users");
var index_1 = require("../src/routes/index");
var conf = {
    '/': { router: index_1["default"] },
    '/api': { router: users_1["default"] }
};
exports["default"] = conf;
