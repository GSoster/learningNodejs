var http = require('http');
var counter = 0;
var objList = [];

for (var i = 0; i < 3; i++) {
  objList[i] = {url : process.argv[i + 2], fullData : '', checkCounter : function () {
    //console.log("checkCounter: " + counter);
    if (counter === 2) {
      for (var j = 0; j < counter; j++) {
        console.log(objList[j].fullData);
      }
    }
  }};
}

function callback (response) {
  var fullData = "";
  response.setEncoding('utf8');
  response.on('data', function(data){ fullData += data;});
  response.on('end', function(data){
    fullData += data;
    objList[counter].fullData = fullData;
    objList[counter].checkCounter();
    counter++;
  });
}

objList.map(function (obj) {http.get(obj.url, callback);});
