'use strict';

var fs = require("fs");

function show(response, postData){
  console.log("request handler 'show' was called.");
  fs.readFile("musicImage.jpg", "binary", function(error, file){
    if (error){
      response.writeHead(500, {"Content-Type" : "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(500, {"Content-Type" : "image/jpg"});
      response.write(file, "binary");
      response.end();
    }
  });
};

//404 response
function send404Response(response) {
    response.writeHead(404, {
        "Content-Type": 'text/plain'
    });
    response.write("Sorry, we couldn't find the page you've requested");
    response.end();
}


exports.show = show;
exports.errorResponse = send404Response;
