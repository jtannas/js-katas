var repeatNumbers = function(repeatArrays) {
  let buffer = [];
  for (let repeatArray of repeatArrays){
    let numberText = repeatArray[0].toString();
    let repeatCount = repeatArray[1];
    buffer.push(numberText.repeat(repeatCount));
  }
  return buffer.join(', ');
};

/* eslint-disable no-console */
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
/* eslint-enable no-console */
