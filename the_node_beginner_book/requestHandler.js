'use strict';
function start() {
    console.log("requestHandler 'start' called");
    return "Hello start";
};

function upload() {
    console.log("requestHandler 'upload' called");
    return "Hello upload";
};

function page(){
  console.log("requestHandler 'page' called");
  return "Hello page";
};

exports.page = page;
exports.start = start;
exports.upload = upload;
