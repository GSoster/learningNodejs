// 1- list all files
// 2- serve an image file to the web page
// 3- serve a music file to the web page
var http = require('http');
var fs = require('fs');
var requestHandler = require('./requestHandler');
var musicHandler = require('./musicHandler');
url = require('url');//to get calls of images/musics

musicHandler.getMusics('.mp3');


//handle a user request
function onRequest(request, response) {
  var req = url.parse(request.url, true);
  var action = req.pathname;
    if (request.method == 'GET' && request.url == '/') {
        musicHandler.showMusicIcon(response);        
        fs.createReadStream('./index.html').pipe(response);
    } else {
        requestHandler.errorResponse(response);
    }
}
var server = http.createServer(onRequest);
server.listen(8888);

console.log("server has started");
