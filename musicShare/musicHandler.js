'use strict';
var fs = require('fs');
var path = require('path');


function getMusics (extension) {
  var musicList;
  fs.readdir(__dirname, function(error, list) {
    musicList = list.filter( (aFile) => {
      return (path.extname(aFile) === extension);
    });
    console.log(musicList);
  });
};


function showMusicIcon (response) {
  var img = fs.readFileSync('./musicImage.jpg');
  response.writeHead(200, {'Content-Type': 'image/jpg' });
  response.end(img, 'binary');
};


//comes from here: https://gist.github.com/dtrce/1204243
function streamMusic(filePath, response){
  //var filePath = './never.mp3',
  let stat = fs.statSync(filePath);
  response.writeHead(200, {
      'Content-Type': 'audio/mpeg',
      'Content-Length': stat.size
  });
  // We replaced all the event handlers with a simple call to util.pump()
  fs.createReadStream(filePath).pipe(response);
};


exports.getMusics = getMusics;
exports.showMusicIcon = showMusicIcon;
exports.streamMusic = streamMusic;
