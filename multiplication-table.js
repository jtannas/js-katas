var generateDashedLine = function(lineMark, dashMark, dashesCount, dashSpacing){
  return (dashMark + lineMark.repeat(dashSpacing)).repeat(dashesCount) + dashMark;
};

var generateGridString = function(rows, columns, rowHeight, columnWidth){
  var seperatorLine = generateDashedLine('-', '+', columns, columnWidth) + '\n';
  var internalLine = generateDashedLine(' ', '|', columns, columnWidth) + '\n';
  var row = seperatorLine + internalLine.repeat(rowHeight);
  return row.repeat(rows) + seperatorLine;
};

var getMatrixWidestElement = function(matrix){
  var rows = matrix.length;
  var columns = matrix[0].length;
  var widestElement = '';
  for (var row = 0; row < rows; row++){
    for (var column = 0; column < columns; column++){
      element = matrix[row][column];
      if (element.toString().length > widestElement.toString().length){
        widestElement = element;
      }
    }
  }
  return widestElement;
};

var representMatrix = function(matrix) {
  var rows = matrix.length;
  var columns = matrix[0].length;
  var maxElementWidth = getMatrixWidestElement(matrix).toString().length;

  var paddingWidth = 1;
  var boxHeight = 1;
  var boxWidth = paddingWidth + maxElementWidth + paddingWidth;

  var gridString = generateGridString(rows, columns, boxHeight, boxWidth);
  var emptyBoxString = ' '.repeat(boxWidth);

  for (var row = 0; row < rows; row++){
    for (var column = 0; column < columns; column++){
      elementString = matrix[row][column].toString();
      paddedString = ' '.repeat(paddingWidth) +
                    ' '.repeat(maxElementWidth - elementString.length) +
                    elementString +
                    ' '.repeat(paddingWidth);
      gridString = gridString.replace(emptyBoxString, paddedString);
    }
  }
  return gridString;
};

var multiplicationTable = function(maxValue) {
  var multiplicationArray = [];
  for (var row = 1; row <= maxValue; row++){
    var rowArray = [];
    for (var column = 1; column <= maxValue; column++){
      rowArray.push(row * column);
    }
    multiplicationArray.push(rowArray);
  }

  return representMatrix(multiplicationArray);
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
