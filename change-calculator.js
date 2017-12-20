var getChangeAmounts = function(changeTotal, denominations) {
  var remainder = changeTotal;
  var change = {};
  for (var denominationName in denominations) {
    if (denominations.hasOwnProperty(denominationName)) {
      var denominationValue = denominations[denominationName];
      if (remainder >= denominationValue) {
        change[denominationName] = Math.floor(remainder / denominationValue);
        remainder %= denominationValue;
      }
    }
  }
  return change;
};

var calculateChange = function(total, cash) {
  var denominations = {
    'twentyDollar': 20,
    'tenDollar': 10,
    'fiveDollar': 5,
    'twoDollar': 2,
    'oneDollar': 1,
    'quarter': 0.25,
    'dime': 0.10,
    'nickel': 0.05,
    'penny': 0.01
  };
  var changeTotal = cash - total;
  return getChangeAmounts(changeTotal, denominations);
};

console.log(calculateChange(17.87, 20));
  // expected: { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(26.23, 40));
  // expected: { ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(5.01, 10));
  // expected: { twoDollar: 2, quater: 3, dime: 2, penny: 4 }
