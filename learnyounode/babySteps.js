/*
* write a program that accepts one or more numbers as command-line arguments
* and prints the sum of those numbers to the console (stdout).
*/
var sum = 0;

/*
* The first element of process.argv is always 'node'
* and the second element is the path to this file.
*/
for(var i = 2; i < process.argv.length; i++){
  sum+= parseInt(process.argv[i]);
}
console.log(sum);
