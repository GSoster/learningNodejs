'use strict';
//we want some specific information from postData (our entire request)
//so we'll use querystring to get it.
var querystring = require("querystring");
var fs = require("fs");

function start(response, postData) {
    console.log("requestHandler 'start' called");
    //exec("ls -lah", function(error, stdout, stderr){
    var body = '<html><head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8"'+
    '</head><body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea><br/>'+
    '<input type="submit" value="Submit text" />'+
    '</form></body></html>';
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write(body);
    response.end();
};

function upload(response, postData) {
    console.log("requestHandler 'upload' called");
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("You've sent: " + querystring.parse(postData).text);
    response.end();
};

function show(response, postData){
  console.log("request handler 'show' was called.");
  fs.readFile("/tmp/test.png", "binary", function(error, file){
    if (error){
      response.writeHead(500, {"Content-Type" : "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(500, {"Content-Type" : "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
};

exports.start = start;
exports.upload = upload;
exports.show = show;
