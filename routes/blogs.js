var express = require('express');
var api = require('../util/queryblogs')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    api.query(req, res)
});

module.exports = router;
