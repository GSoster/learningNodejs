var myModule = require("./myModule.js");

var directory = process.argv[2];
var extension = process.argv[3];

myModule(directory, extension, function(error, data){
  if (error){
    console.log("ERROR! " + error);
  } else {
    data.forEach(function(value){console.log(value)});
  }

});
