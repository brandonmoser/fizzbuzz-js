// This is a Fizz Buzz test written in JavaScript
// Expected output should be:
// 1 2 Fizz 4 Buzz 6 7 8 Fizz Buzz 11 Fizz 13 15 FizzBuzz 16 17 Fizz ...
var lib = require('./lib');

var LOOPS = 100;

var output = [];
for (var i = 0; i < 100; i++){
  output.push(lib.fizzbuzz(i+1));
}
console.log(output.join(' '));