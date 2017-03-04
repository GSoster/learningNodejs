//server.js

//BASE SETUP

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restApiScotch');


// configure app to use bodyParser()
// this will let us get the data from a POST

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//ROUTES FOR OUR API
var router = express.Router();

router.get('/', function(req, res){
  res.json({message: 'hello world!'});
});

app.use('/api', router);

//START THE server
app.listen(port);
console.log('server started at: ' + port);
