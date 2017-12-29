function ChessBoard(){
  var size = 8;
  var grid = new Array(size);
  for (var i = 0; i < size; i++){
    grid[i] = new Array(size);
    grid[i].fill(0);
  }
  this.grid = grid;
}
ChessBoard.prototype.addQueen = function(position){
  this.grid[position[0]][position[1]] = 1;
};
ChessBoard.shareRow = function(position1, position2){
  return position1[0] === position2[0];
};
ChessBoard.shareColumn = function(position1, position2){
  return position1[1] === position2[1];
};
ChessBoard.shareDiagonal = function(position1, position2){
  var rowDiff = position1[0] - position2[0];
  var columnDiff = position1[1] - position2[1];
  return Math.abs(rowDiff) === Math.abs(columnDiff);
};

myChessBoard = new ChessBoard();

var queenThreat = function(queen1, queen2){
  myChessBoard = new ChessBoard();
  myChessBoard.addQueen(queen1);
  myChessBoard.addQueen(queen2);
  return (
    ChessBoard.shareRow(queen1, queen2) ||
    ChessBoard.shareColumn(queen1, queen2) ||
    ChessBoard.shareDiagonal(queen1, queen2)
  );
};


var queen1 = [0, 5];
var queen2 = [5, 0];
console.log(queenThreat(queen1, queen2) === true);
console.log(myChessBoard);

queen1 = [0, 0];
queen2 = [7, 5];
console.log(queenThreat(queen1, queen2) === false);
console.log(myChessBoard);
