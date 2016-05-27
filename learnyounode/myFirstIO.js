/*
* read the number of '\n' in file using a single synchronous filesystem
* operation
*/
var fs = require("fs");

//fs.readFileSync returns a buffer object containing the complete contents of the file.
var str = fs.readFileSync(process.argv[2]).toString();
console.log(str.split("\n").length - 1);
