var http = require('http');
var url = require('url'); //our router needs it to get the path
/*
route here is a function from ./router.js
*/
function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        request.setEncoding("utf8");

        /*
        *requests work in two ways on nodejs: 'data' (chucks of data) and 'end' when all the request is received
        */
        request.addListener("data", function(postDataChuck){
          //called when a new chuck of data was received
          postData += postDataChuck;
          console.log("received chuck of data: " + postDataChuck);
        });

        request.addListener("end", function(){
          //called when all chucks of data have been received
            route(handle, pathname, response, postData);
            //we took response from here and now it is route's responsability to emit a response.
        });

    };

    http.createServer(onRequest).listen(80);
    console.log("Server has started");
}

exports.start = start;
