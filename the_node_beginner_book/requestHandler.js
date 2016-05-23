'use strict';

var exec = require("child_process").exec;

function start(response) {
    console.log("requestHandler 'start' called");
    //exec("ls -lah", function(error, stdout, stderr){
    exec("dir", function(error, stdout, stderr){
      response.writeHead(200, {"Content-Type" : "text/plain"});
      response.write(stdout);
      response.end();
    });
};

function upload(response) {
    console.log("requestHandler 'upload' called");
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Hello upload");
    response.end();
};

exports.start = start;
exports.upload = upload;
