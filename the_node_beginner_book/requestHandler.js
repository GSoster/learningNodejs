'use strict';

var exec = require("child_process").exec;

function start() {
    console.log("requestHandler 'start' called");

    var content = "empty";

    exec("ls -lah", function(error, stdout, stderr){
      content = stdout;
    });

    return content;
};

function upload() {
    console.log("requestHandler 'upload' called");
    return "Hello upload";
};

exports.start = start;
exports.upload = upload;
