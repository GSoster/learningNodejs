/*
* this module is used in the exercise 6: make it modular.
* this file is being used by the file: makeItModular.js
*/
var fs = require("fs");
var path = require("path");


function printListOfFilesByExtension(directory, extension, callback){
  fs.readdir(directory, function(error, list){
    if (error){
      return callback(error);
    }
    var filteredList = [];//no errros, we can put in this array the filtered data.
    filteredList = list.filter(function(file){return (path.extname(file) === "."+extension);});
    return callback(null, filteredList);
  });
};

module.exports = printListOfFilesByExtension;
