var movies = require('./movies');
var emilyMovies = movies();
emilyMovies.favMovie = "The notebook";
console.log("Emily's favorite movie is : " + emilyMovies.favMovie);