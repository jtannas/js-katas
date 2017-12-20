String.prototype.sentenceCase = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

var camelCase = function(inputString) {
  var words = inputString.split(' ');
  for (var i = 0; i < words.length; i++){
    words[i] = words[i].sentenceCase();
  }
  words[0] = words[0].toLowerCase();
  return words.join('');
};

console.log(camelCase('this is a string'));
// expected: thisIsAString
console.log(camelCase('loopy lighthouse'));
// expected: loopyLighthouse
console.log(camelCase('supercalifragalisticexpialidocious'));
// expected: supercalifragalisticexpialidocious


console.log(camelCase(''));
// expected:
console.log(camelCase('GoOfY CaSe'));
// expected: goofyCase
