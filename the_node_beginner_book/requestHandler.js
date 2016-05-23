'use strict';

var exec = require("child_process").exec;

function start(response) {
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

function upload(response) {
    console.log("requestHandler 'upload' called");
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Hello upload");
    response.end();
};

exports.start = start;
exports.upload = upload;
