var getTestForCondition = function(condition) {
  switch(condition) {
  case 'even':
    return function (testSubject) { return(testSubject % 2 === 0); };
  case 'odd':
    return function (testSubject) { return(testSubject % 2 === 1); };
  }
};

var conditionalSum = function(values, condition) {
  var sum = 0;
  var test = getTestForCondition(condition);

  values.forEach(function(currentValue) {
    if (test(currentValue) === true){
      sum += currentValue;
    }
  });
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));
