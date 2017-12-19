
var conditionalSum = function(values, condition) {
  let reducer;
  switch(condition) {
    case 'even':
      reducer = (accumulator, currentValue) => currentValue % 2 === 0 ? accumulator + currentValue : accumulator;
      break;
    case 'odd':
      reducer = (accumulator, currentValue) => currentValue % 2 === 1 ? accumulator + currentValue : accumulator;
      break;
    default:
      reducer = (accumulator, currentValue) => accumulator + currentValue;
      break;
  }
  return values.reduce(reducer, 0);
};

/* eslint-disable no-console */
console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));
/* eslint-enable no-console */
