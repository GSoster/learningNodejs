/*
* Exercise 8 of 13:
* Collect all data from the server (not just the first "data" event) and then
write two lines to the console.
*/
var url = process.argv[2];
var http = require("http");
var fullData = "";
http.get(url, function(response){
  response.setEncoding("utf8");
  response.on("data", function(data){
    fullData += data;
  });
  response.on("end", function(data){
    console.log(fullData.length);//number of characteres received
    console.log(fullData);
  });
});
