
var conditionalSum = function(values, condition) {
  let sum = 0;
  let test;
  switch(condition) {
    case 'even':
      test = (currentValue) => currentValue % 2 === 0;
      break;
    case 'odd':
      test = (currentValue) => currentValue % 2 === 1;
      break;
    default:
      test = () => true;
      break;
  }
  for (let currentValue of values){
    if (test(currentValue) === true){
      sum += currentValue;
    }
  }
  return sum;
};

/* eslint-disable no-console */
console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));
/* eslint-enable no-console */
