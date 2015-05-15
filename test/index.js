var chai = require('chai')
  , assert = chai.assert
  , expect = chai.expect
  , should = chai.should();
var lib = require('../lib/index');

describe('FizzBuzzer', function(){
  it('should respond Fizz for every 3rd value', function(done){
    lib.fizzbuzz(3).should.equal('Fizz');
    done();
  });
  it('should respond Fizz for every 5th value', function(done){
    lib.fizzbuzz(5).should.equal('Buzz');
    done();
  });
  it('should respond FizzBuzz for every multiple of 3 and 5', function(done){
    var multiple = 3*5;
    lib.fizzbuzz(multiple).should.equal('FizzBuzz');
    done();
  });
});

describe('String validator', function(){
  var str = '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz';
  it('should valid the test string "str"', function(done){
    var arr = str.split(' ');
    var vals = [];
    for(var i = 0; i < arr.length; i++) {
      vals.push(lib.fizzbuzz(i+1));
    }
    var newstr = vals.join(' ');
    newstr.should.be.equal(str);
    done();
  });
});