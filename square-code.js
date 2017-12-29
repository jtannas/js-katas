'use strict';
var consolePrompt = require('prompt-sync')();


String.prototype.splice = function(insertMe, position){
  return this.slice(0, position) + insertMe + this.slice(position);
};


String.prototype.squarified = function(){
  var strLen = this.length;
  var squareWidth = Math.ceil(Math.sqrt(strLen));
  var splitter = '\n';
  var workingString = this.trim().replace(/\r?\n|\r/g, '');

  var lastSplitterPosition = strLen - (strLen % squareWidth || squareWidth);
  for (var position = lastSplitterPosition; position > 0; position -= squareWidth){
    workingString = workingString.splice(splitter, position);
  }
  return workingString.split(splitter);
};


String.prototype.squareCoded = function(){
  var newLine = '\n';
  var squareArray = this.squarified();

  var squareHeight = squareArray.length;
  var squareWidth = squareArray[0].length;
  var buffer = '';
  for (var column = 0; column < squareWidth; column++){
    for (var row = 0; row < squareHeight; row++){
      buffer += (squareArray[row][column] || ' ');
    }
    buffer += ' ';
  }
  return buffer.trim();
};


var getString = function(maxLength, promptMessage){
  var maxRetries = 5;
  for (var i = 0; i < maxRetries; i++){
    console.log(promptMessage || 'Please input some text');
    var input = consolePrompt('> ');
    if (input && (input.length <= (maxLength || Infinity))) { return input; }
  }
  throw 'GetString: A valid string was not provided.';
};


if (process.argv[2] !== 'test') {
  var message = getString(81, 'Please provide a string to encode');
  console.log(message.squareCoded());
} else {
  var squareCodeTest = function(phrase, expected){
    var result = phrase.toLowerCase().replace(/ /g, '').squareCoded();
    if (result === expected){
      console.log('Success');
    } else {
      console.log('Test Failure:');
      console.log('   Input: ' + phrase);
      console.log('   Output: ' + result);
      console.log('   Wanted: ' + expected);
    }
  };
  squareCodeTest('', '');
  squareCodeTest('123456789', '147 258 369');
  var phrase = 'If man was meant to stay on the ground god would have given us roots';
  var expected = 'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau';
  squareCodeTest(phrase, expected);
  squareCodeTest('haveaniceday', 'hae and via ecy');
  squareCodeTest('feedthedog', 'fto ehg ee  dd');
  squareCodeTest('chillout', 'clu hlt io');
}
