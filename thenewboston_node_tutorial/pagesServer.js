var http = require('http');
var fs = require('fs');

//404 response
function send404Response(response) {
    response.writeHead(404, {
        "Content-Type": 'text/plain'
    });
    response.write("Sorry, we couldn't find the page you've requested");
    response.end();
}

//handle a user request
function onRequest(request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {
            "Content-Type": 'text/html'
        });
        fs.createReadStream('./index.html').pipe(response);
    } else {
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8888);