require("./emily");
require("./bucky");

//core modules:
var fs = require('fs'); //file system
//writing files:
fs.writeFileSync('corn.txt', 'corn is tasty'); //path(name), content, options

//reading files:
console.log(fs.readFileSync('corn.txt').toString());

////////////////
//path module normalize path depending on the operating system.
var path = require('path');
var websiteHome = "Desktop/temp//watch later.txt"; //it will correct the // problem
console.log(path.normalize(websiteHome));