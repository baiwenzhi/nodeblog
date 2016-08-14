var http = require('http');
var qs = require('querystring');
exports.query = function(req, res){
    var options = {
        hostname: '127.0.0.1',
        port: 8000,
        path: '/api/blogs?' + qs.stringify(req.query),
        method: 'GET'
    };
    var ores = res
    var req = http.request(options, function (res) {
        var body = ''
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            body += chunk
        }).on('end', function () {
            ores.send(200, body); });
    });

    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });

    req.end();
}


