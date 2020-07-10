var http = require('http');
var url = require('url');
var route = require('./route');

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('request for %s received', pathname);
        route.route(pathname);
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('hello world');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('server has started');
}

exports.start = start;