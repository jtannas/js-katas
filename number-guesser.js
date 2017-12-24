var prompt = require('prompt-sync')();

var randBetween = function(lowerLimit, upperLimit, isInclusive){
  var range = upperLimit - lowerLimit + (isInclusive ? 1 : 0);
  return Math.floor(Math.random() * range + lowerLimit);
};

var main = function(){
  var randNumber = randBetween(0, 100, true);
  var previousGuesses = new Set();

  do {
    console.log('Guess a number');
    var guess = Number(prompt('> '));

    if (isNaN(guess)) {
      console.log('Not a number! Try again!');
    } else if (previousGuesses.has(guess)){
      console.log('Already Guessed!');
    } else if (guess < randNumber){
      console.log('Too Low!');
    } else if (guess > randNumber){
      console.log('Too High!');
    }
    previousGuesses.add(guess);
  } while (!previousGuesses.has(randNumber));
  console.log('You got it! You took ' + previousGuesses.size + ' attempts!');
};

main();
