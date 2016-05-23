var http = require('http');
var url = require('url'); //our router needs it to get the path



/*
route here is a function from ./router.js
*/
function start(route, handle) {

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(handle, pathname);

        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.write("it started");
        response.end();
    }


    http.createServer(onRequest).listen(80);
    console.log("Server has started");

}

exports.start = start;
