const FactoryBrick = require("./bricks/FactoryBirck");

class Board {
  constructor(board) {
    this.indexBorderX = board[0].length - 1;
    this.indexBorderY = board.length - 1;
    this.factory = new FactoryBrick();
    this.board = this.getBoard(board);
  }
  getBordered([x, y]) {
    if (
      (x === this.indexBorderX || x === 0) &&
      (y === this.indexBorderY || y === 0)
    ) {
      return "xy";
    } else if (x === this.indexBorderX || x === 0) {
      return "x";
    } else if (y === this.indexBorderY || y === 0) {
      return "y";
    } else {
      return null;
    }
  }
  getBoard(board) {
    return board.map((row, rowIndex) =>
      row.map((element, columnIndex) => {
        return (board[rowIndex][columnIndex] = this.factory.getBrick({
          position: { y: rowIndex, x: columnIndex },
          symbol: element,
          bordered: this.getBordered([columnIndex, rowIndex]),
        }));
      })
    );
  }
}

module.exports = Board;
