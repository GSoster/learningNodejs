//server.js

//BASE SETUP

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Bear = require('./models/bear');

mongoose.connect('mongodb://localhost:27017/restApiScotch');


// configure app to use bodyParser()
// this will let us get the data from a POST

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//ROUTES FOR OUR API
var router = express.Router();
//middleware to use for all requests
router.use(function(req, res, next){
  //do logging
  console.log('Something is happening');
  next();//make sure we go to the next routes and don't stop here
});

//test route to make sure everything is working
router.get('/', function(req, res){
  res.json({message: 'say hello to my  REST API!'});
});
//more routes for our API
// REGISTER OUR ROUTES ---------------
// all of our routes will be prefixed with /api


app.use('/api', router);

//START THE server
app.listen(port);
console.log('server started at: ' + port);
