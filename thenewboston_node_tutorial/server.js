var http = require('http');
//the function that will be passed as parameter to the http.createServer function receives two parameters: request, response. 
function onRequest(request, response) {
    console.log("A user made a request: ", request.url);
    response.writeHead(200, {
        "Content-Type": "text/plain"
    }); //status code, reason, obj
    response.write("Here is some data");
    response.end();
};

//we pass on createServer what the server should do.
//we pass the port that the server will listen to in the listen function.
http.createServer(onRequest).listen(8888);
console.log("Server is now running....");