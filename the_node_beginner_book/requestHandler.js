'use strict';
//we want some specific information from postData (our entire request)
//so we'll use querystring to get it.
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response, postData) {
    console.log("requestHandler 'start' called");
    //exec("ls -lah", function(error, stdout, stderr){
    var body = '<html><head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8"'+
    '</head><body>'+
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload"><br/>'+
    '<input type="submit" value="Upload file" />'+
    '</form></body></html>';
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write(body);
    response.end();
};

function upload(response, request) {
    console.log("requestHandler 'upload' called");
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function(error, fields, files){
      console.log("parsing done");
      /*possible error on windows systems: tried to rename to an already existing file*/
      fs.rename(files.upload.path, "/tmp/test.png", function(err){
        if (err) {
          fs.unlink("/tmp/test.png");
          fs.rename(files.upload.path, "/tmp/test.png");
        }//if
      });//fs.rename
    });//form.parse
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("received image: <br/>");
    response.write("<img src='/show' />");
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
