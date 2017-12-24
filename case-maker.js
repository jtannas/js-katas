String.prototype.sentenceCase = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

String.prototype.pascalCase = function() {
  var words = this.split(' ');
  return words.reduce(function(accumulator, word){
    return accumulator + word.sentenceCase();
  }, '');
};

String.prototype.camelCase = function() {
  var words = this.split(' ');
  words[0] = words[0].toLowerCase();
  for (var i = 1; i < words.length; i++){
    words[i] = words[i].sentenceCase();
  }
  return words.join('');
};

String.prototype.snakeCase = function() {
  return this.replace(/ /g, '_');
};

String.prototype.kebabCase = function() {
  return this.replace(/ /g, '-');
};

String.prototype.isInsignificant = function(providedInsignicantWords) {
  var defaultInsignificantWords = ['a', 'an', 'is'];
  var insignicantWords = providedInsignicantWords || defaultInsignificantWords;
  return insignicantWords.includes(this.toLowerCase());
};

String.prototype.titleCase = function(smallWords) {
  var words = this.split(' ');
  words[0] = words[0].sentenceCase();
  for (var i = 1; i < words.length; i++){
    word = words[i];
    if (word.isInsignificant(smallWords)){
      words[i] = word.toLowerCase();
    } else {
      words[i] = word.sentenceCase();
    }
  }
  return words.join(' ');
};

String.prototype.vowelCase = function() {
  return this.toLowerCase().replace(/[aeiou]/g, function(captured) {
    return captured.toUpperCase();
  });
};

String.prototype.consonantCase = function() {
  return this.toLowerCase().replace(/[^aeiou]/g, function(captured) {
    return captured.toUpperCase();
  });
};

var makeCase = function(sentence, caseNames){
  var caseMakerFunctions = {
    "camel": String.prototype.camelCase,
    "pascal": String.prototype.pascalCase,
    "snake": String.prototype.snakeCase,
    "kebab": String.prototype.kebabCase,
    "title": String.prototype.titleCase,
    "vowel": String.prototype.vowelCase,
    "consonant": String.prototype.consonantCase,
    "upper": String.prototype.toUpperCase,
    "lower": String.prototype.toLowerCase
  };

  var cases = caseNames;
  if (caseNames.constructor !== Array){
    cases = [caseNames];
  }
  var buffer = sentence;
  for (key in caseMakerFunctions){
    if (caseMakerFunctions.hasOwnProperty(key) && caseNames.includes(key)) {
      buffer = caseMakerFunctions[key].call(buffer);
    }
  }
  return buffer;
};

console.log(makeCase('this is a string', 'camel') === 'thisIsAString');
console.log(makeCase('this is a string', 'pascal') === 'ThisIsAString');
console.log(makeCase('this is a string', 'snake') === 'this_is_a_string');
console.log(makeCase('this is a string', 'kebab') === 'this-is-a-string');
console.log(makeCase('this is a string', 'title') === 'This is a String');
console.log(makeCase('this is a string', 'vowel') === 'thIs Is A strIng');
console.log(makeCase('this is a string', 'consonant') === 'THiS iS a STRiNG');
console.log(makeCase('this is a string', ['upper', 'snake']) === 'THIS_IS_A_STRING');
