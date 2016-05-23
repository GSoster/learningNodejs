'use strict';
function start() {
    console.log("start called");
};

function upload() {
    console.log("upload called");
};

function page(){
  console.log("page called");
};

exports.page = page;
exports.start = start;
exports.upload = upload;
