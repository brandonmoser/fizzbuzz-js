var functions = {};

functions.fizzbuzz = function(i){
  var fizzCheck = 3;
  var buzzCheck = 5;
  var fizzBuzz = fizzCheck * buzzCheck;

  if (i % fizzBuzz == 0) {
    return 'FizzBuzz';
  } else if (i % buzzCheck == 0) {
    return 'Buzz'
  } else if (i % fizzCheck == 0) {
    return 'Fizz'
  }

  return i.toString();
}

module.exports = functions;