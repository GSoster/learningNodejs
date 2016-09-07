'use strict';
// 1- list all files
// 2- serve an image file to the web page
// 3- serve a music file to the web page
var http = require('http'),
    fs   = require('fs'),
    url = require('url'),//to get calls of images/musics
    musicHandler = require('./musicHandler'),
    requestHandler = require('./requestHandler');
    //filePath = './never.mp3',
    //stat = fs.statSync(filePath);

http.createServer(function(request, response) {
  var req = url.parse(request.url, true);
  var action = req.pathname;
  if (request.method == 'GET' && request.url == '/') {
      fs.createReadStream('./index.html').pipe(response);
  }else if(request.method == 'GET' && request.url == '/music'){
      musicHandler.streamMusic('./never.mp3', response);
  } else {
      requestHandler.errorResponse(response);
  }
})
.listen(2000);
