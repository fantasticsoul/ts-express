"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express gogogo2233322' });
});
exports["default"] = router;
