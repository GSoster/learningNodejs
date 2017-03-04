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

// ## on routes that end in /bears
router.route('/bears')
//create a bear (accessed at POST httpp://localhost:8080/api/bears)
.post(function(req, res){
  var bear = new Bear();//create a new instance of the Bear model
  bear.name = req.body.name;//set the bears name (comes from the request)

  //save the bear and check for errors
  bear.save(function(err){
    if(err)
      res.send(err);

      res.json({message: 'Bear created!'});
  });
})

//getting all bears (accessed at GET httpp://localhost:8080/api/bears)
.get(function(req, res){
  Bear.find(function(err, bears){
    if(err)
      res.send(err);
    res.json(bears);
  });
})

//## on routes that end in /bears/:bear_id
router.route('/bears/:bear_id')
//get the bear with that id (accessed at GET httpp://localhost:8080/api/bears/:bear_id)
.get(function(req, res){
  console.log("Param to GET : " + req.params.bear_id);
  Bear.findById(req.params.bear_id, function(err, bear){
    if(err)
      res.send(err);
    res.json(bear);
  })
})

.put(function(req, res){
  console.log("Param to PUT : " + req.params.bear_id);
  Bear.findById(req.params.bear_id, function(err, bear){
    if(err)
      res.send(err);
    bear.name = req.body.name;//update the bears info
    bear.save(function(err){
      if(err)
        res.send(err);
      res.json({message: 'bear (id: '+req.params.bear_id+') updated!'});
    });

  })
})

.delete(function(req, res){
  console.log("Param to DELETE : " + req.params.bear_id);
  Bear.remove({
    _id: req.params.bear_id
  }, function(err, bear){
      if(err)
        res.send(err);
      res.json({message: 'Successfully deleted!'});

  });
});



// REGISTER OUR ROUTES ---------------
// all of our routes will be prefixed with /api
app.use('/api', router);

//START THE server
app.listen(port);
console.log('server started at: ' + port);
