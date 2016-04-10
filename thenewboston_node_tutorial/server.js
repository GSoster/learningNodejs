var connect = require("connect");
var http = require("http");

var app = connect();

function doFirst(request, response, next) {
    console.log("a request was made: first");
    next(); //call the next method in the stack
}

function doSecond(request, response, next) {
    console.log("a request was made: second");
    next();
}
//create a stack of methods to be executed
app.use(doFirst);
app.use(doSecond);

//we can use the connect module as a router too
function profile(request, response) {
    console.log('user has required profile');
}
app.use('/profile', profile);


//server start
http.createServer(app).listen(8888);
console.log('server is running...');