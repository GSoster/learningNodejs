var fs = require('fs');
var path = require('path');
var http = require('http');

function readMusics(extension) {
  fs.readdir(__dirname, function(error, list) {
    list.map((aFile) => {
      (path.extname(aFile) === extension) ? console.log(aFile) : null ;
    });
  });
}

function getMusics (extension) {
  fs.readdir(__dirname, function(error, list) {
    list.filter( (aFile) => {
      return (path.extname(aFile) === extension);
    });
  });
};


//readMusics('.mp3');
getMusics('.mp3');

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
        response.write("<h1>Work?</h1>");
        fs.createReadStream('./index.html').pipe(response);
    } else {
        send404Response(response);
    }
}
var server = http.createServer(onRequest);
server.listen(8888);

console.log("server has started");
