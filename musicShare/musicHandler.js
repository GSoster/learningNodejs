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


exports.getMusics = getMusics;
exports.showMusicIcon = showMusicIcon;
