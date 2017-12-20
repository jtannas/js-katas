var repeatNumbers = function(repeatArrays) {
  var buffer = [];
  repeatArrays.forEach(function(repeatArray){
    var stringToRepeat = repeatArray[0].toString();
    var repeatCount = repeatArray[1];
    buffer.push(stringToRepeat.repeat(repeatCount));
  });
  return buffer.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
